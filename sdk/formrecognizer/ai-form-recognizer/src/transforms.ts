// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AnalyzeResult as AnalyzeResultModel,
  DataTable as DataTableModel,
  DocumentResult as DocumentResultModel,
  FieldValue as FieldValueModel,
  KeyValueElement as KeyValueElementModel,
  KeyValuePair as KeyValuePairModel,
  PageResult as PageResultModel,
  ReadResult as ReadResultModel,
  TextLine as TextLineModel,
  GeneratedClientGetAnalyzeFormResultResponse as GetAnalyzeFormResultResponse,
  GeneratedClientGetAnalyzeLayoutResultResponse as GetAnalyzeLayoutResultResponse,
  GeneratedClientGetCustomModelResponse as GetCustomModelResponse,
  SelectionMark,
  TrainResult,
  KeysResult,
  Attributes
} from "./generated/models";

import {
  FormPage,
  FormLine,
  FormElement,
  FormTable,
  RecognizedForm,
  FieldData,
  FormField,
  Point2D,
  FormModelResponse,
  CustomFormModelField,
  CustomFormSubmodel,
  RecognizedFormArray,
  FormSelectionMark,
  TrainingDocumentInfo,
  CustomFormModelProperties
} from "./models";
import { RecognizeContentResultResponse } from "./internalModels";

/**
 * @internal
 */
function toBoundingBox(original: number[]): Point2D[] {
  return [
    { x: original[0], y: original[1] },
    { x: original[2], y: original[3] },
    { x: original[4], y: original[5] },
    { x: original[6], y: original[7] }
  ];
}

/**
 * Utility type to remove null | undefined from a type.
 * @internal
 */
type NotNull<T> = T extends null | undefined ? never : T;

/**
 * Extracts the keys of a type whose value types are assignable to a Condition.
 * @internal
 */
type KeysWhere<T, Condition> = NotNull<
  {
    [K in keyof T]: T[K] extends Condition ? K : never;
  }[keyof T]
>;

/**
 * @internal
 */
export function toTextLine(original: TextLineModel, pageNumber: number): FormLine {
  const appearance =
    original.appearance !== undefined
      ? {
          styleName: original.appearance.style.name,
          styleConfidence: original.appearance.style.confidence
        }
      : undefined;

  const line: FormLine = {
    kind: "line",
    pageNumber,
    text: original.text,
    boundingBox: toBoundingBox(original.boundingBox),
    appearance,
    words: original.words.map((w) => {
      return {
        kind: "word",
        text: w.text,
        boundingBox: toBoundingBox(w.boundingBox),
        confidence: w.confidence || 1,
        pageNumber
      };
    })
  };

  return line;
}

/**
 * @internal
 */
export function toSelectionMark(original: SelectionMark, pageNumber: number): FormSelectionMark {
  return {
    kind: "selectionMark",
    pageNumber,
    boundingBox: toBoundingBox(original.boundingBox),
    confidence: original.confidence,
    state: original.state
  };
}

/**
 * @internal
 */
export function toFormPage(original: ReadResultModel): FormPage {
  return {
    pageNumber: original.pageNumber,
    textAngle: original.angle,
    width: original.width,
    height: original.height,
    unit: original.unit,
    lines: original.lines?.map((l) => toTextLine(l, original.pageNumber)),
    selectionMarks: original.selectionMarks?.map((m) => toSelectionMark(m, original.pageNumber))
  };
}

/**
 * A RegExp that can handle parsing an ElementReference. It handles any keys of FormPage and
 * Supports optionally specifying "words" at the end. This is kind of hacked together, but
 * can handle all the valid element references in Form Recognizer so far.
 */
const elementReferencePattern = /\/readResults\/(\d+)\/([a-z][a-zA-Z]*)\/(\d+)(?:\/words\/(\d+))?/;

/**
 * Parse an ElementReference of a known structure.
 * @internal
 * @param ref - the string representation (JSON Pointer) of the ElementReference
 * @param readResults - The transformed ReadResults into which the reference points
 * @returns a reference to the FormElement that the ElementReference refers to
 */
export function elementReferenceToFormElement(ref: string, readResults: FormPage[]): FormElement {
  const result = elementReferencePattern.exec(ref);

  if (result === null) {
    throw new Error(`Unexpected element reference encountered: "${ref}"`);
  }

  const readIndex = Number.parseInt(result[1]);
  const elementKind = result[2] as KeysWhere<FormPage, FormElement[] | undefined>;
  const elementIndex = Number.parseInt(result[3]);
  const wordIndex = Number.parseInt(result[4]);

  const baseElement = readResults[readIndex][elementKind]![elementIndex];

  if (!Number.isNaN(wordIndex) && elementKind === "lines") {
    return (baseElement as FormLine).words[wordIndex];
  }

  return baseElement;
}

/**
 * @internal
 */
export function toFieldData(
  pageNumber: number,
  original: KeyValueElementModel,
  readResults?: FormPage[]
): FieldData {
  return {
    pageNumber,
    text: original.text,
    boundingBox: original.boundingBox ? toBoundingBox(original.boundingBox) : undefined,
    fieldElements: original.elements?.map((element) =>
      elementReferenceToFormElement(element, readResults!)
    )
  };
}

/**
 * @internal
 */
export function toFormFieldFromKeyValuePairModel(
  pageNumber: number,
  original: KeyValuePairModel,
  readResults?: FormPage[]
): FormField {
  return {
    name: original.label,
    confidence: original.confidence || 1,
    labelData: toFieldData(pageNumber, original.key, readResults),
    valueData: toFieldData(pageNumber, original.value, readResults),
    value: original.value.text,
    valueType: "string"
  };
}

/**
 * @internal
 */
export function toFormTable(
  original: DataTableModel,
  readResults: FormPage[],
  pageNumber: number
): FormTable {
  return {
    rowCount: original.rows,
    columnCount: original.columns,
    boundingBox: original.boundingBox ? toBoundingBox(original.boundingBox) : undefined,
    cells: original.cells.map((cell) => ({
      boundingBox: toBoundingBox(cell.boundingBox),
      columnIndex: cell.columnIndex,
      fieldElements: cell.elements?.map((element) =>
        elementReferenceToFormElement(element, readResults)
      ),
      rowIndex: cell.rowIndex,
      columnSpan: cell.columnSpan ?? 1,
      rowSpan: cell.rowSpan ?? 1,
      isHeader: cell.isHeader ?? false,
      isFooter: cell.isFooter ?? false,
      confidence: cell.confidence ?? 1,
      text: cell.text,
      pageNumber
    })),
    pageNumber
  };
}

/**
 * @internal
 */
export function toFormPages(
  readResults?: ReadResultModel[],
  pageResults?: PageResultModel[]
): FormPage[] {
  const transformed = readResults?.map(toFormPage);
  // maps from page numbers to the objects
  const pageMap = new Map<number, PageResultModel>(pageResults?.map((r) => [r.pageNumber, r]));
  return (
    transformed?.map((page) => {
      const { pageNumber } = page;
      const pageResult = pageMap.get(pageNumber);
      return {
        ...page,
        tables:
          pageResult?.tables?.map((table) => toFormTable(table, transformed, pageNumber)) ?? []
      };
    }) ?? []
  );
}

/**
 * @internal
 */
export function toRecognizedFormArray(
  original: GetAnalyzeFormResultResponse,
  expectedDocTypePrefix?: string
): RecognizedFormArray {
  const pages = toFormPages(
    original.analyzeResult?.readResults,
    original.analyzeResult?.pageResults
  );

  if (original.analyzeResult?.documentResults?.length) {
    // supervised/prebuilt results come from documentResults
    return (
      original.analyzeResult?.documentResults
        ?.filter((d) => !!d.fields)
        ?.map((d) => {
          if (expectedDocTypePrefix !== undefined && !d.docType.startsWith(expectedDocTypePrefix)) {
            throw new RangeError(
              `Expected document type to start with '${expectedDocTypePrefix}', but found '${d.docType}'.`
            );
          }
          return toRecognizedForm(d, pages);
        }) ?? []
    );
  } else {
    // unsupervised results from from pageResults;
    return original.analyzeResult?.pageResults?.map((p) => toFormFromPageResult(p, pages)) ?? [];
  }
}

/**
 * @internal
 */
export function toFormFieldFromFieldValueModel(
  original: FieldValueModel,
  key: string,
  readResults: FormPage[]
): FormField {
  let value:
    | string
    | Date
    | number
    | FormField[]
    | { [propertyName: string]: FormField }
    | undefined;

  function unreachable(v: never): never {
    throw new Error(`Encountered unknown field value type: ${v}`);
  }

  switch (original.type) {
    case "string":
      value = original.valueString;
      break;
    case "date":
      value = original.valueDate;
      break;
    case "time":
      value = original.valueTime;
      break;
    case "integer":
      value = original.valueInteger;
      break;
    case "number":
      value = original.valueNumber;
      break;
    case "phoneNumber":
      value = original.valuePhoneNumber;
      break;
    case "selectionMark":
      value = original.valueSelectionMark;
      break;
    case "array":
      value = original.valueArray?.map((fieldValueModel) =>
        toFormFieldFromFieldValueModel(fieldValueModel, key, readResults)
      );
      break;
    case "object":
      value = original.valueObject
        ? toFieldsFromFieldValue(original.valueObject, readResults)
        : undefined;
      break;
    case "countryRegion":
      value = original.valueCountryRegion;
      break;
    default:
      return unreachable(original.type);
  }
  return {
    confidence: original.confidence || 1,
    name: key,
    valueData: {
      pageNumber: original.pageNumber ?? 0,
      text: original.text,
      boundingBox: original.boundingBox ? toBoundingBox(original.boundingBox) : undefined,
      fieldElements: original.elements?.map((element) =>
        elementReferenceToFormElement(element, readResults)
      )
    },
    valueType: original.type,
    value
  } as FormField;
}

/**
 * @internal
 */
export function toFieldsFromFieldValue(
  original: { [propertyName: string]: FieldValueModel | null },
  readResults: FormPage[]
): { [propertyName: string]: FormField } {
  const result: { [propertyName: string]: FormField } = {};
  for (const key in original) {
    if (Object.prototype.hasOwnProperty.call(original, key)) {
      if (!original[key]) {
        result[key] = { name: key };
        continue;
      }
      const formField = toFormFieldFromFieldValueModel(original[key]!, key, readResults);
      result[key] = formField;
    }
  }

  return result;
}

/**
 * @internal
 */
export function toFieldsFromKeyValuePairs(
  pageNumber: number,
  original: KeyValuePairModel[],
  pages: FormPage[]
): { [propertyName: string]: FormField } {
  const result: { [propertyName: string]: FormField } = {};
  for (let i = 0; i < original.length; i++) {
    const pair = original[i];
    const stringField = toFormFieldFromKeyValuePairModel(pageNumber, pair, pages);
    stringField.name = stringField.name || `field-${i}`;

    result[`field-${i}`] = stringField;
  }

  return result;
}

/**
 * @internal
 */
export function toFormFromPageResult(original: PageResultModel, pages: FormPage[]): RecognizedForm {
  return {
    formType: `form-${original.clusterId}`,
    pageRange: { firstPageNumber: original.pageNumber, lastPageNumber: original.pageNumber },
    pages: pages.filter((p) => p.pageNumber === original.pageNumber),
    fields: original.keyValuePairs
      ? toFieldsFromKeyValuePairs(original.pageNumber, original.keyValuePairs, pages)
      : {}
  };
}

/**
 * @internal
 */
export function toRecognizedForm(original: DocumentResultModel, pages: FormPage[]): RecognizedForm {
  return {
    formType: original.docType,
    formTypeConfidence: original.docTypeConfidence,
    modelId: original.modelId,
    pageRange: { firstPageNumber: original.pageRange[0], lastPageNumber: original.pageRange[1] },
    fields: toFieldsFromFieldValue(original.fields, pages),
    pages: pages.filter(
      (p) => original.pageRange[0] <= p.pageNumber && p.pageNumber <= original.pageRange[1]
    )
  };
}

/**
 * @internal
 */
export function toRecognizeContentResultResponse(
  original: GetAnalyzeLayoutResultResponse
): RecognizeContentResultResponse {
  function toRecognizeContentResult(
    model?: AnalyzeResultModel
  ): { version?: string; pages?: FormPage[] } | undefined {
    if (!model) {
      return undefined;
    }
    const pages = toFormPages(model.readResults, model.pageResults);
    return {
      version: model.version,
      pages: pages
    };
  }

  const common = {
    status: original.status,
    createdOn: original.createdOn,
    errors: original.analyzeResult?.errors,
    lastModified: original.lastModified,
    _response: original._response
  };
  if (original.status === "succeeded") {
    return {
      ...common,
      ...toRecognizeContentResult(original.analyzeResult)
    };
  } else {
    return common;
  }
}

/**
 * @internal
 */
function flattenTrainingDocuments(
  original: GetCustomModelResponse
): TrainingDocumentInfo[] | undefined {
  if (original.composedTrainResults) {
    // Composed model, need to zip the training documents into a flat array and add modelID correlation.
    const mappedResultDocuments = original.composedTrainResults.map((innerResult) =>
      innerResult.trainingDocuments.map((info) => ({
        ...info,
        modelId: innerResult.modelId,
        errors: info.errors ?? []
      }))
    );

    return ([] as TrainingDocumentInfo[]).concat(...mappedResultDocuments);
  } else if (original.trainResult) {
    // Normal training scenario with only one trainResult
    return original.trainResult.trainingDocuments.map((info) => ({
      ...info,
      modelId: original.modelInfo.modelId,
      errors: info.errors ?? []
    }));
  }

  return undefined;
}

/**
 * @internal
 */
function toSubmodelsFromComposedTrainResults(results: TrainResult[]): CustomFormSubmodel[] {
  const mappedSubmodels = results.map((r) => toSubmodelsFromTrainResultLabeled(r));

  // Flatten the array
  return ([] as CustomFormSubmodel[]).concat(...mappedSubmodels);
}

/**
 * @internal
 */
function toSubmodelsFromTrainResultLabeled(
  result: TrainResult,
  modelName?: string
): CustomFormSubmodel[] {
  return [
    {
      modelId: result.modelId,
      accuracy: result.averageModelAccuracy,
      formType: `custom:${modelName ?? result.modelId}`,
      fields:
        result.fields?.reduce((fields, field) => {
          fields[field.fieldName] = {
            name: field.fieldName,
            accuracy: field.accuracy,
            label: null
          };
          return fields;
        }, {} as Record<string, CustomFormModelField>) ?? {}
    }
  ];
}

/**
 * @internal
 */
function toSubmodelsFromTrainResultUnlabeled(
  keys: KeysResult,
  modelId: string
): CustomFormSubmodel[] {
  // Each cluster becomes a submodel
  return Object.entries(keys.clusters).map(
    ([clusterKey, cluster]): CustomFormSubmodel => ({
      modelId,
      // Create formType from the key of the cluster
      formType: `form-${clusterKey}`,
      // Roll the fields up into the correct shape
      fields: cluster.reduce((fields, label, idx) => {
        fields[`field-${idx}`] = {
          name: `field-${idx}`,
          label
        };
        return fields;
      }, {} as Record<string, CustomFormModelField>)
    })
  );
}

/**
 * @internal
 */
function flattenCustomFormSubmodels(
  original: GetCustomModelResponse
): CustomFormSubmodel[] | undefined {
  if (original.modelInfo.status === "ready") {
    if (original.composedTrainResults !== undefined) {
      return toSubmodelsFromComposedTrainResults(original.composedTrainResults);
    } else if (original.trainResult?.fields || original.trainResult?.averageModelAccuracy) {
      return toSubmodelsFromTrainResultLabeled(original.trainResult, original.modelInfo.modelName);
    } else if (original.keys) {
      return toSubmodelsFromTrainResultUnlabeled(original.keys, original.modelInfo.modelId);
    } else {
      throw new Error("No submodel information was found in the training response.");
    }
  }
  return undefined;
}

/**
 * @internal
 */
export function toCustomFormModelProperties(
  original: Attributes | undefined
): CustomFormModelProperties | undefined {
  if (original) {
    return {
      isComposedModel: original.isComposed
    };
  } else {
    return undefined;
  }
}

/**
 * @internal
 */
export function toFormModelResponse(response: GetCustomModelResponse): FormModelResponse {
  return {
    status: response.modelInfo.status,
    modelId: response.modelInfo.modelId,
    modelName: response.modelInfo.modelName,
    trainingStartedOn: response.modelInfo.trainingStartedOn,
    trainingCompletedOn: response.modelInfo.trainingCompletedOn,
    trainingDocuments: flattenTrainingDocuments(response),
    properties: toCustomFormModelProperties(response.modelInfo.attributes),
    errors: response.trainResult?.errors,
    submodels: flattenCustomFormSubmodels(response),
    _response: response._response
  };
}
