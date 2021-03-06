// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @summary Demonstrates query throughput scenarios.
 */

const path = require("path");
require("dotenv").config();

const { CosmosClient } = require("../dist-esm");

const {
  COSMOS_DATABASE: dbId,
  COSMOS_CONTAINER: containerId,
  COSMOS_ENDPOINT: endpoint,
  COSMOS_KEY: key
} = process.env;

async function run() {
  const client = new CosmosClient({
    endpoint,
    key
  });

  const query1 = "Select * from c order by c._ts";
  const query2 = "Select * from c";
  const query3 = "Select value count(c.id) from c";

  const container = client.database(dbId).container(containerId);
  const options = {
    maxItemCount: 10000,
    maxDegreeOfParallelism: 1000,
    bufferItems: true
  };

  const scenarios = [];
  scenarios.push({ container, query: query1, options });
  scenarios.push({ container, query: query2, options });
  scenarios.push({ container, query: query3, options });

  for (const scenario of scenarios) {
    try {
      console.log("Scenario starting: " + scenario.query);
      const start = Date.now();
      await runScenario(scenario.container, scenario.query, scenario.options);
      console.log(
        'Scenario complete: "' + scenario.query + '" - took ' + (Date.now() - start) / 1000 + "s"
      );
    } catch (e) {
      console.log("Scenario failed: " + scenario.query + " - " + JSON.stringify(scenario.options));
    }
  }
}

async function runScenario(container, query, options) {
  const queryIterator = container.items.query(query, options);
  let count = 0;
  while (queryIterator.hasMoreResults() && count <= 100000) {
    const { resources: results } = await queryIterator.fetchNext();
    if (results !== undefined) {
      count = count + results.length;
    }
  }
}

run().catch(console.error);
