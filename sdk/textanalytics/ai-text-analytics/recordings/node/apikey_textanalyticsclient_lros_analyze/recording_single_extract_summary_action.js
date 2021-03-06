let nock = require('nock');

module.exports.hash = "4219507adf0424bb513a4d7e506b5620";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint', {"encodedQueryParams":true})
  .post('/text/analytics/v3.2-preview.1/analyze', {"analysisInput":{"documents":[{"id":"0","text":"\n          No roads or rails connect the 39,000 people dispersed across Nunavut, a territory in northeastern Canada that spans three time zones and features fjord-cut isles that stretch into the Arctic Circle off the west coast of Greenland. About 80% of the population is of Inuit descent with cultural ties to the land that date back more than 4,000 years.\n          \n          Today, low-bandwidth satellite internet service links the people of Nunavut to each other and with the rest of the world.\n                  \n          The Government of Nunavut relies on this internet link to provide healthcare, education, housing and family, and financial and other services to 25 communities. The smallest, Grise Fiord, has a population of 130; the largest, the capital, Iqaluit, has 8,500 people. About 3,100 people work full-time for the government, which has an office in each community. Another 3,000 people work for the government as relief workers, casual, term or contractors.\n                  \n          Managing information technology for this dispersed and elastic workforce is a constant challenge for Martin Joy, director of information communication and technology for the Government of Nunavut.\n                  \n          “Traditionally, in IT, you would have to send a device or mail a device to that end user. In Nunavut, there is no road, there is no logistical framework that allows us to move stuff cost-effectively, so everything has to be flown,” he explained. “Based on weather, based on the types of cargo flows, that could take a considerable amount of time. It could take two to three weeks for us to get a user a device to get them onboarded securely into our environment.”\n                  \n          “Now, with Windows 365, we can do that within less than an hour of the account being created,” he said.\n                  \n          Windows 365 puts Microsoft’s flagship operating system in the cloud. Users select Windows 10 or Windows 11, once it is generally available later this calendar year, along with a configuration of processing power, storage and memory that suits their needs. They then access their Cloud PC through a native application or web browser on any device, from anywhere with an internet connection.\n                  \n          The creation of the Cloud PC follows other products and services to the cloud, from Windows Server on Azure to the suite of Microsoft Office productivity applications in Microsoft 365. Windows is already accessible in the cloud via Azure Virtual Desktop, which offers customers flexibility to create and run their own virtualization service. Windows 365 is a new virtualization technology for Windows that is easy to set up and deploy for today’s login-from-anywhere, mobile and elastic workforces.\n                  \n          “Windows 365 is really going to make a huge difference for organizations that wanted to try virtualization for various reasons but could not – maybe it was too costly, too complex or they didn’t have the expertise in house to do it,” said Wangui McKelvey, general manager of Microsoft 365, who works from a home office in Atlanta, Georgia.\n                  \n          With Windows 365, she added, IT admins can manage and deploy Cloud PCs using the same tools they use today to manage physical PCs.\n                  \n          The remote and hybrid workforces of today and tomorrow were top of mind for Scott Manchester when he set out to develop Windows 365. The director of program management for Windows 365 in Redmond, Washington, wanted to deliver an experience with the look, feel and security of a traditional Windows PC, only accessed through a native app or web browser on a device of the user’s choosing from anywhere with an internet connection.\n          \n          “You want them to be able to get access to their corporate resources, applications, databases and HR tools, and do all the things they do in a typical workday sitting in the office – you want them to have that same experience,” he said. “And you want them to have that experience in such a way that it feels familiar to them. It’s not this jolting thing that takes away all the things they love about Windows.”\n          \n          Virtualization, he noted, can be challenging to set up and maintain, especially for organizations without dedicated IT resources. IT consulting firms do brisk business working with companies to set up virtualization solutions and staffing help desks to field calls from employees when they run into complications. Manchester knows this because he worked on Microsoft’s Windows virtualization technologies for nearly two decades prior to leading the development of Windows 365.\n          \n          The inspiration for Windows 365 came earlier, when he was assigned to an internal team at Microsoft working on a project, code named Arcadia, a consumer-facing service that would stream video games from the cloud. The target audience – gamers – lacks an IT department to lean on when things glitch. “That started me thinking, ‘How do we build something that doesn’t require IT intervention, something that could truly scale to the consumer market?’” Manchester said.\n          \n          The consumer experience was Manchester’s benchmark when he started work on virtualization.\n          \n          “I took note of every time there was something that didn’t quite deliver on that,” he said. “And, as I started meeting with customers and partners and learning about how they fill in these gaps either by setting expectations of their workforce or having an IT department that picks up the phone and deals with those situations, I realized we had some ground to cover.”\n          \n          Covering that ground led to improvements in Microsoft’s business offering now known as Azure Virtual Desktop. This offering continues to experience accelerated growth among customers who need full customization and control over their operating environment and have the resources for dedicated IT staff to support the system, Manchester noted. Windows 365 is for the approximate 80% of the marketplace that lacks the need for full customization or the resources for dedicated IT.\n          \n          To lead the development of Windows 365, Manchester leaned into his Arcadia mindset.\n          \n          “When we built this team, we brought in a couple of leaders who had experience with virtualization, but for the most part we brought in people who had experience with Windows and experience with consumer experiences because that was the bar we wanted to set,” he said.\n          \n          Soon after this bar was set, and the first batch of hires made – a handful of experts in virtualization and user experience – COVID-19 hit and changed the world.\n          \n          “We hired everybody else during the pandemic,” Manchester said. “They were remote. They were living all over the U.S., Australia, Europe and China. Many of them have never set foot in the office. And as soon as we got far enough along with the development, we moved those people to use the service. People who never used virtualization before, had no expectations – their bar was the experience they had on their laptop – and we basically used Windows 365 to build Windows 365.”\n          \n          As the team used the service and encountered bugs in the system, they worked through and solved them on their way to creating a unique category of virtualization, the Cloud PC.\n          \n          “We’re giving you Windows from the cloud,” Manchester said.\n                  ","language":"en"},{"id":"1","text":"\n          Windows 365 was in the works before COVID-19 sent companies around the world on a scramble to secure solutions to support employees suddenly forced to work from home, but “what really put the firecracker behind it was the pandemic, it accelerated everything,” McKelvey said. She explained that customers were asking, “’How do we create an experience for people that makes them still feel connected to the company without the physical presence of being there?”\n\n          In this new world of Windows 365, remote workers flip the lid on their laptop, bootup the family workstation or clip a keyboard onto a tablet, launch a native app or modern web browser and login to their Windows 365 account. From there, their Cloud PC appears with their background, apps, settings and content just as they left it when they last were last there – in the office, at home or a coffee shop.\n\n          “And then, when you’re done, you’re done. You won’t have any issues around security because you’re not saving anything on your device,” McKelvey said, noting that all the data is stored in the cloud.\n\n          The ability to login to a Cloud PC from anywhere on any device is part of Microsoft’s larger strategy around tailoring products such as Microsoft Teams and Microsoft 365 for the post-pandemic hybrid workforce of the future, she added. It enables employees accustomed to working from home to continue working from home; it enables companies to hire interns from halfway around the world; it allows startups to scale without requiring IT expertise.\n\n          “I think this will be interesting for those organizations who, for whatever reason, have shied away from virtualization. This is giving them an opportunity to try it in a way that their regular, everyday endpoint admin could manage,” McKelvey said.\n\n          The simplicity of Windows 365 won over Dean Wells, the corporate chief information officer for the Government of Nunavut. His team previously attempted to deploy a traditional virtual desktop infrastructure and found it inefficient and unsustainable given the limitations of low-bandwidth satellite internet and the constant need for IT staff to manage the network and infrastructure.\n\n          We didn’t run it for very long,” he said. “It didn’t turn out the way we had hoped. So, we actually had terminated the project and rolled back out to just regular PCs.”\n\n          He re-evaluated this decision after the Government of Nunavut was hit by a ransomware attack in November 2019 that took down everything from the phone system to the government’s servers. Microsoft helped rebuild the system, moving the government to Teams, SharePoint, OneDrive and Microsoft 365. Manchester’s team recruited the Government of Nunavut to pilot Windows 365. Wells was intrigued, especially by the ability to manage the elastic workforce securely and seamlessly.\n\n          “The impact that I believe we are finding, and the impact that we’re going to find going forward, is being able to access specialists from outside the territory and organizations outside the territory to come in and help us with our projects, being able to get people on staff with us to help us deliver the day-to-day expertise that we need to run the government,” he said.\n\n          “Being able to improve healthcare, being able to improve education, economic development is going to improve the quality of life in the communities.”\n          ","language":"en"}]},"tasks":{"extractiveSummarizationTasks":[{"parameters":{"model-version":"latest","stringIndexType":"Utf16CodeUnit","sentenceCount":5,"sortBy":"Offset"}}]}})
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'operation-location',
  'https://endpoint/text/analytics/v3.2-preview.1/analyze/jobs/5097c289-2b3f-4dc6-a40e-34de37ab8b94',
  'x-envoy-upstream-service-time',
  '508',
  'apim-request-id',
  'e627f947-da3c-4ff8-bcb6-ad519ad0b7ce',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 03 Aug 2021 22:36:46 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.2-preview.1/analyze/jobs/5097c289-2b3f-4dc6-a40e-34de37ab8b94')
  .query(true)
  .reply(200, {"jobId":"5097c289-2b3f-4dc6-a40e-34de37ab8b94","lastUpdateDateTime":"2021-08-03T22:36:47Z","createdDateTime":"2021-08-03T22:36:47Z","expirationDateTime":"2021-08-04T22:36:47Z","status":"running","errors":[],"displayName":"NA","tasks":{"completed":0,"failed":0,"inProgress":1,"total":1}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '153',
  'apim-request-id',
  'f8ff0736-f0f6-46b4-adc5-f18172f994e7',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 03 Aug 2021 22:36:47 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.2-preview.1/analyze/jobs/5097c289-2b3f-4dc6-a40e-34de37ab8b94')
  .query(true)
  .reply(200, {"jobId":"5097c289-2b3f-4dc6-a40e-34de37ab8b94","lastUpdateDateTime":"2021-08-03T22:36:47Z","createdDateTime":"2021-08-03T22:36:47Z","expirationDateTime":"2021-08-04T22:36:47Z","status":"running","errors":[],"displayName":"NA","tasks":{"completed":0,"failed":0,"inProgress":1,"total":1}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '96',
  'apim-request-id',
  '0267d9bb-bc6a-4b10-aff1-d8fadaaa6e99',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 03 Aug 2021 22:36:47 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.2-preview.1/analyze/jobs/5097c289-2b3f-4dc6-a40e-34de37ab8b94')
  .query(true)
  .reply(200, {"jobId":"5097c289-2b3f-4dc6-a40e-34de37ab8b94","lastUpdateDateTime":"2021-08-03T22:36:47Z","createdDateTime":"2021-08-03T22:36:47Z","expirationDateTime":"2021-08-04T22:36:47Z","status":"running","errors":[],"displayName":"NA","tasks":{"completed":0,"failed":0,"inProgress":1,"total":1}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '141',
  'apim-request-id',
  'd84486ce-6aae-43b4-be12-d46948405304',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 03 Aug 2021 22:36:49 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.2-preview.1/analyze/jobs/5097c289-2b3f-4dc6-a40e-34de37ab8b94')
  .query(true)
  .reply(200, {"jobId":"5097c289-2b3f-4dc6-a40e-34de37ab8b94","lastUpdateDateTime":"2021-08-03T22:36:47Z","createdDateTime":"2021-08-03T22:36:47Z","expirationDateTime":"2021-08-04T22:36:47Z","status":"running","errors":[],"displayName":"NA","tasks":{"completed":0,"failed":0,"inProgress":1,"total":1}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '69',
  'apim-request-id',
  '303053c1-40f1-473b-898a-2fd86e494dee',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 03 Aug 2021 22:36:51 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.2-preview.1/analyze/jobs/5097c289-2b3f-4dc6-a40e-34de37ab8b94')
  .query(true)
  .reply(200, {"jobId":"5097c289-2b3f-4dc6-a40e-34de37ab8b94","lastUpdateDateTime":"2021-08-03T22:36:47Z","createdDateTime":"2021-08-03T22:36:47Z","expirationDateTime":"2021-08-04T22:36:47Z","status":"running","errors":[],"displayName":"NA","tasks":{"completed":0,"failed":0,"inProgress":1,"total":1}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '177',
  'apim-request-id',
  '53b70273-5287-48a8-974b-680bbd01e880',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 03 Aug 2021 22:36:53 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.2-preview.1/analyze/jobs/5097c289-2b3f-4dc6-a40e-34de37ab8b94')
  .query(true)
  .reply(200, {"jobId":"5097c289-2b3f-4dc6-a40e-34de37ab8b94","lastUpdateDateTime":"2021-08-03T22:36:47Z","createdDateTime":"2021-08-03T22:36:47Z","expirationDateTime":"2021-08-04T22:36:47Z","status":"running","errors":[],"displayName":"NA","tasks":{"completed":0,"failed":0,"inProgress":1,"total":1}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '13',
  'apim-request-id',
  '21eaa249-16cb-4f08-9bbd-16358d4eaaa0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 03 Aug 2021 22:36:55 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.2-preview.1/analyze/jobs/5097c289-2b3f-4dc6-a40e-34de37ab8b94')
  .query(true)
  .reply(200, {"jobId":"5097c289-2b3f-4dc6-a40e-34de37ab8b94","lastUpdateDateTime":"2021-08-03T22:36:47Z","createdDateTime":"2021-08-03T22:36:47Z","expirationDateTime":"2021-08-04T22:36:47Z","status":"running","errors":[],"displayName":"NA","tasks":{"completed":0,"failed":0,"inProgress":1,"total":1}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '6',
  'apim-request-id',
  '4a046b9e-4c90-4d4c-adc7-ee3c691265e1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 03 Aug 2021 22:36:58 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.2-preview.1/analyze/jobs/5097c289-2b3f-4dc6-a40e-34de37ab8b94')
  .query(true)
  .reply(200, {"jobId":"5097c289-2b3f-4dc6-a40e-34de37ab8b94","lastUpdateDateTime":"2021-08-03T22:36:47Z","createdDateTime":"2021-08-03T22:36:47Z","expirationDateTime":"2021-08-04T22:36:47Z","status":"running","errors":[],"displayName":"NA","tasks":{"completed":0,"failed":0,"inProgress":1,"total":1}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '7',
  'apim-request-id',
  '357fa2f7-d462-4ffe-9fb7-1833e4241270',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 03 Aug 2021 22:37:00 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.2-preview.1/analyze/jobs/5097c289-2b3f-4dc6-a40e-34de37ab8b94')
  .query(true)
  .reply(200, {"jobId":"5097c289-2b3f-4dc6-a40e-34de37ab8b94","lastUpdateDateTime":"2021-08-03T22:36:47Z","createdDateTime":"2021-08-03T22:36:47Z","expirationDateTime":"2021-08-04T22:36:47Z","status":"running","errors":[],"displayName":"NA","tasks":{"completed":0,"failed":0,"inProgress":1,"total":1}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '7',
  'apim-request-id',
  '52ba4be9-3fc7-4885-8932-a74c2e98a766',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 03 Aug 2021 22:37:02 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.2-preview.1/analyze/jobs/5097c289-2b3f-4dc6-a40e-34de37ab8b94')
  .query(true)
  .reply(200, {"jobId":"5097c289-2b3f-4dc6-a40e-34de37ab8b94","lastUpdateDateTime":"2021-08-03T22:36:47Z","createdDateTime":"2021-08-03T22:36:47Z","expirationDateTime":"2021-08-04T22:36:47Z","status":"running","errors":[],"displayName":"NA","tasks":{"completed":0,"failed":0,"inProgress":1,"total":1}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '6',
  'apim-request-id',
  '5bd64922-b5bc-4b00-a803-04e4778783a2',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 03 Aug 2021 22:37:04 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.2-preview.1/analyze/jobs/5097c289-2b3f-4dc6-a40e-34de37ab8b94')
  .query(true)
  .reply(200, {"jobId":"5097c289-2b3f-4dc6-a40e-34de37ab8b94","lastUpdateDateTime":"2021-08-03T22:36:47Z","createdDateTime":"2021-08-03T22:36:47Z","expirationDateTime":"2021-08-04T22:36:47Z","status":"running","errors":[],"displayName":"NA","tasks":{"completed":0,"failed":0,"inProgress":1,"total":1}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '7',
  'apim-request-id',
  '9a9bbcfb-37cd-4865-81d5-62dde033d0b8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 03 Aug 2021 22:37:06 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.2-preview.1/analyze/jobs/5097c289-2b3f-4dc6-a40e-34de37ab8b94')
  .query(true)
  .reply(200, {"jobId":"5097c289-2b3f-4dc6-a40e-34de37ab8b94","lastUpdateDateTime":"2021-08-03T22:37:07Z","createdDateTime":"2021-08-03T22:36:47Z","expirationDateTime":"2021-08-04T22:36:47Z","status":"succeeded","errors":[],"displayName":"NA","tasks":{"completed":1,"failed":0,"inProgress":0,"total":1,"extractiveSummarizationTasks":[{"lastUpdateDateTime":"2021-08-03T22:37:07.342652Z","taskName":"ExtractiveSummarization_latest","state":"succeeded","results":{"documents":[{"id":"0","sentences":[{"text":"No roads or rails connect the 39,000 people dispersed across Nunavut, a territory in northeastern Canada that spans three time zones and features fjord-cut isles that stretch into the Arctic Circle off the west coast of Greenland.","rankScore":0.9424625379379141,"offset":11,"length":230},{"text":"About 80% of the population is of Inuit descent with cultural ties to the land that date back more than 4,000 years.","rankScore":0.8696578658347244,"offset":242,"length":116},{"text":"Today, low-bandwidth satellite internet service links the people of Nunavut to each other and with the rest of the world.","rankScore":0.79887955940961,"offset":380,"length":121},{"text":"The Government of Nunavut relies on this internet link to provide healthcare, education, housing and family, and financial and other services to 25 communities.","rankScore":0.7014254027202066,"offset":531,"length":160},{"text":"Managing information technology for this dispersed and elastic workforce is a constant challenge for Martin Joy, director of information communication and technology for the Government of Nunavut.","rankScore":0.6628612394522352,"offset":1012,"length":196}],"warnings":[]},{"id":"1","sentences":[{"text":"Windows 365 was in the works before COVID-19 sent companies around the world on a scramble to secure solutions to support employees suddenly forced to work from home, but “what really put the firecracker behind it was the pandemic, it accelerated everything,” McKelvey said.","rankScore":0.9862194204316037,"offset":11,"length":274},{"text":"She explained that customers were asking, “’How do we create an experience for people that makes them still feel connected to the company without the physical presence of being there?”","rankScore":0.9978084744623865,"offset":286,"length":184},{"text":"In this new world of Windows 365, remote workers flip the lid on their laptop, bootup the family workstation or clip a keyboard onto a tablet, launch a native app or modern web browser and login to their Windows 365 account.","rankScore":0.860018698051389,"offset":482,"length":224},{"text":"From there, their Cloud PC appears with their background, apps, settings and content just as they left it when they last were last there – in the office, at home or a coffee shop.","rankScore":0.6112745423048975,"offset":707,"length":179},{"text":"His team previously attempted to deploy a traditional virtual desktop infrastructure and found it inefficient and unsustainable given the limitations of low-bandwidth satellite internet and the constant need for IT staff to manage the network and infrastructure.","rankScore":0.27658209232173997,"offset":1949,"length":262}],"warnings":[]}],"errors":[],"modelVersion":"2021-08-01"}}]}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '246',
  'apim-request-id',
  '2179276f-acfd-4bcb-90b6-3c45dbd6a384',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 03 Aug 2021 22:37:08 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/text/analytics/v3.2-preview.1/analyze/jobs/5097c289-2b3f-4dc6-a40e-34de37ab8b94')
  .query(true)
  .reply(200, {"jobId":"5097c289-2b3f-4dc6-a40e-34de37ab8b94","lastUpdateDateTime":"2021-08-03T22:37:07Z","createdDateTime":"2021-08-03T22:36:47Z","expirationDateTime":"2021-08-04T22:36:47Z","status":"succeeded","errors":[],"displayName":"NA","tasks":{"completed":1,"failed":0,"inProgress":0,"total":1,"extractiveSummarizationTasks":[{"lastUpdateDateTime":"2021-08-03T22:37:07.342652Z","taskName":"ExtractiveSummarization_latest","state":"succeeded","results":{"documents":[{"id":"0","sentences":[{"text":"No roads or rails connect the 39,000 people dispersed across Nunavut, a territory in northeastern Canada that spans three time zones and features fjord-cut isles that stretch into the Arctic Circle off the west coast of Greenland.","rankScore":0.9424625379379141,"offset":11,"length":230},{"text":"About 80% of the population is of Inuit descent with cultural ties to the land that date back more than 4,000 years.","rankScore":0.8696578658347244,"offset":242,"length":116},{"text":"Today, low-bandwidth satellite internet service links the people of Nunavut to each other and with the rest of the world.","rankScore":0.79887955940961,"offset":380,"length":121},{"text":"The Government of Nunavut relies on this internet link to provide healthcare, education, housing and family, and financial and other services to 25 communities.","rankScore":0.7014254027202066,"offset":531,"length":160},{"text":"Managing information technology for this dispersed and elastic workforce is a constant challenge for Martin Joy, director of information communication and technology for the Government of Nunavut.","rankScore":0.6628612394522352,"offset":1012,"length":196}],"warnings":[]},{"id":"1","sentences":[{"text":"Windows 365 was in the works before COVID-19 sent companies around the world on a scramble to secure solutions to support employees suddenly forced to work from home, but “what really put the firecracker behind it was the pandemic, it accelerated everything,” McKelvey said.","rankScore":0.9862194204316037,"offset":11,"length":274},{"text":"She explained that customers were asking, “’How do we create an experience for people that makes them still feel connected to the company without the physical presence of being there?”","rankScore":0.9978084744623865,"offset":286,"length":184},{"text":"In this new world of Windows 365, remote workers flip the lid on their laptop, bootup the family workstation or clip a keyboard onto a tablet, launch a native app or modern web browser and login to their Windows 365 account.","rankScore":0.860018698051389,"offset":482,"length":224},{"text":"From there, their Cloud PC appears with their background, apps, settings and content just as they left it when they last were last there – in the office, at home or a coffee shop.","rankScore":0.6112745423048975,"offset":707,"length":179},{"text":"His team previously attempted to deploy a traditional virtual desktop infrastructure and found it inefficient and unsustainable given the limitations of low-bandwidth satellite internet and the constant need for IT staff to manage the network and infrastructure.","rankScore":0.27658209232173997,"offset":1949,"length":262}],"warnings":[]}],"errors":[],"modelVersion":"2021-08-01"}}]}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '127',
  'apim-request-id',
  'aa9fd94d-97c4-4d0c-83d2-1efa9940846a',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 03 Aug 2021 22:37:08 GMT'
]);
