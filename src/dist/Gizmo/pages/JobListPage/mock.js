"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrganizationsMock = exports.jobListMock = void 0;
var jobListMock = {
  totalCount: {
    totalRows: 10,
    totalPages: 5
  },
  selectOptions: {
    priority: [{
      name: 'None',
      value: 'none'
    }, {
      name: 'P1',
      value: 'p1'
    }, {
      name: 'P2',
      value: 'p2'
    }, {
      name: 'P3',
      value: 'p3'
    }, {
      name: 'P4',
      value: 'p4'
    }],
    jobState: [{
      name: 'In Progress',
      value: 'in_progress'
    }, {
      name: 'Open',
      value: 'open'
    }, {
      name: 'Initializing',
      value: 'initializing'
    }, {
      name: 'Done',
      value: 'done'
    }],
    organization: [{
      name: 'eBay',
      value: 'ebay'
    }, {
      name: 'Ugam',
      value: 'ugam'
    }, {
      name: '60K',
      value: '60k'
    }]
  },
  jobs: [{
    id: '345111',
    jobType: 'Adoption',
    name: 'ron',
    priority: 'p0',
    jobState: 'Initializing',
    numberOfEpids: 0,
    numberOfDoneEpids: 0,
    vendorTeamLeaders: ['Michal Ryba'],
    owners: ['Benny', 'yosi', 'gil'],
    organizations: [1],
    creationDate: '1580805723217',
    chatMessages: true
  }, {
    id: '346',
    jobType: 'Adoption',
    name: 'guy',
    priority: 'p1',
    jobState: 'In Progress',
    numberOfEpids: 0,
    numberOfDoneEpids: 0,
    vendorTeamLeaders: ['Michal Ryba'],
    owners: ['Benny'],
    organizations: [3],
    creationDate: '1580805723217',
    numberOfNeedReviewEpids: 10
  }, {
    id: '347',
    jobType: 'duplicate',
    name: 'guy',
    priority: 'p2',
    jobState: 'Open',
    numberOfEpids: 0,
    numberOfDoneEpids: 0,
    vendorTeamLeaders: ['Michal Ryba'],
    owners: ['Benny'],
    organizations: [6],
    creationDate: '1580805723217'
  }, {
    id: '348',
    jobType: 'Adoption',
    name: 'tal',
    priority: 'p1',
    jobState: 'Done',
    numberOfEpids: 0,
    numberOfDoneEpids: 0,
    vendorTeamLeaders: ['Michal Ryba'],
    owners: ['Benny'],
    organizations: [1],
    creationDate: '1580805723217'
  }]
};
exports.jobListMock = jobListMock;
var getOrganizationsMock = {
  organizationContractList: [{
    organizationId: 1,
    organizationName: 'eBay',
    locales: {
      locales: ['US', 'US_MOTORS', 'CA', 'UK', 'AU', 'FR', 'ES', 'DE', 'IT', 'FRITES']
    },
    languages: ['English', 'French', 'Spanish', 'German', 'Italian', 'English_au'],
    groupContractList: [{
      organizationId: 0,
      organizationName: null,
      groupId: 'f413da78-7803-4f85-939a-5af1d436219d',
      groupName: 'Data Managers'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '163e7ad6-e8b8-44b2-baaa-07e48eb9f39e',
      groupName: 'Crawling'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: 'fea13af5-073d-46df-8e7b-89a4a2717ee5',
      groupName: 'Process Engineers'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '0a0d6280-0153-4c80-f21d-ed727895f9fd',
      groupName: 'Motors'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '41110256-b533-49cf-867e-12856f136769',
      groupName: 'Test'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: 'e01dea41-4288-42e6-a57f-b0967b326976',
      groupName: 'CSI'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: 'cff42ee8-d5d4-42be-83a5-2ab3612741a4',
      groupName: 'QA - Doron'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '6e0bd6ed-dd30-43d3-8a54-e0f6710de2f5',
      groupName: 'Classification'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '6d8a2754-4469-4eb1-915c-ec7b70fe5659',
      groupName: 'QA - Batsheva'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: 'cbc755b7-a92f-4fbe-ab0e-e191cb794c5b',
      groupName: 'QA - Shaii'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '68df18ef-0f0b-4df0-9068-9625b8562a61',
      groupName: 'Roy_Test'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '87ca5f12-f085-4f43-9093-12fda38b4017',
      groupName: 'doron 2 - QA'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '173287bf-d242-4dd9-a840-5167428f5d36',
      groupName: 'Discovery Demo'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '9f0df8d8-3cb5-49dc-a3dc-05f1ea995d7a',
      groupName: 'QA - Fred'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: 'ee68b63e-bac7-4c9f-a5db-34ca608818bf',
      groupName: 'QA-ihab'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '82178c50-bde9-4dac-9f33-137d5e9bc1af',
      groupName: 'Rapid Ops Team'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: 'c8371edf-c6ef-4918-bc31-e7d2f61180b8',
      groupName: 'GCX'
    }]
  }, {
    organizationId: 3,
    organizationName: '60k',
    locales: {
      locales: ['US', 'US_MOTORS', 'CA', 'UK', 'AU', 'DE']
    },
    languages: ['English', 'German'],
    groupContractList: [{
      organizationId: 0,
      organizationName: null,
      groupId: 'f413da38-7803-4f85-839a-5af1d436210d',
      groupName: 'Productization'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: 'f413da38-7823-4f85-839a-5af1d436210d',
      groupName: 'Metadata'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: 'f413da38-7828-4f85-839a-5af1d436210d',
      groupName: 'Support'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: 'f413da38-7827-4f85-839a-5af1d436210d',
      groupName: 'Adoption'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '96566604-6c7c-4243-9cbe-b70810957bc8',
      groupName: 'CSI'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '7b38c55b-0cf2-4ff4-bbd1-3a03bf8b304b',
      groupName: '60k QA'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: 'ac80fa2b-e795-40ca-a469-823b89337ce8',
      groupName: 'Metadata Discovery'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '8af2848c-be37-4d98-a46a-f7da35a8ac03',
      groupName: 'Discovery Global Alignment'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: 'd55156ec-4bea-4730-a55b-a898426dcd11',
      groupName: 'Discovery Brand Alignment'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '75443927-3968-462f-bf4e-28c4286c48ab',
      groupName: 'Discovery M&S'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '1f6eb685-f9ab-4f74-98e9-62ccf94de0d0',
      groupName: 'Roy 60k'
    }]
  }, {
    organizationId: 6,
    organizationName: 'CES',
    locales: {
      locales: ['US', 'US_MOTORS', 'CA', 'UK', 'AU']
    },
    languages: ['English'],
    groupContractList: [{
      organizationId: 0,
      organizationName: null,
      groupId: '018c81a7-c991-4de3-846a-5de929bffd3e',
      groupName: 'Productization'
    }]
  }, {
    organizationId: 7,
    organizationName: 'ebay QA',
    locales: {
      locales: ['US', 'US_MOTORS', 'CA', 'UK', 'AU', 'FR', 'ES', 'DE', 'IT', 'FRITES']
    },
    languages: ['English', 'French', 'Spanish', 'German', 'Italian'],
    groupContractList: [{
      organizationId: 0,
      organizationName: null,
      groupId: 'd5f92a42-63cf-4782-a290-5b75e4c3d13d',
      groupName: 'Doron - eBay QA'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: 'b70c2c6b-cca4-4ebb-a03e-e13a7829bd1b',
      groupName: 'Fred - eBay QA'
    }]
  }, {
    organizationId: 8,
    organizationName: 'Ugam',
    locales: {
      locales: ['US', 'US_MOTORS', 'CA', 'UK', 'AU']
    },
    languages: ['English'],
    groupContractList: [{
      organizationId: 0,
      organizationName: null,
      groupId: 'ef855b89-7393-4055-b794-88f43390e974',
      groupName: 'CSI'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '01b330fb-0909-45ad-bea7-ae5df0d0f185',
      groupName: 'Deduplication'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: 'd698a18a-e925-4068-9257-9ff97c102197',
      groupName: 'Product Accuracy'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '8ee170e4-7c04-4042-a234-1466b889045a',
      groupName: 'BMD_Recall_Training'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '7d957238-b709-438e-8047-9183aed38e07',
      groupName: 'Top SKUs'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '4cf14c3a-89d3-48ae-9636-c3ee165d1156',
      groupName: 'Product Duplicates'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '0ecc2eb1-b3b0-4d23-81a2-53512538568f',
      groupName: 'Metadata Discovery'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '2039821b-9258-4e32-90c5-1c6251bd2bae',
      groupName: 'Discovery Brand Alignment'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '1279666d-6144-446d-8140-c0ba6ed63eb7',
      groupName: 'Discovery Global Alignment'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '2d5e091b-aff9-4eeb-9720-1a0b03ae58c2',
      groupName: 'Discovery M&S'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '31687a3e-3769-422a-acdc-dedfa894acc8',
      groupName: 'Metadata_NF_TMS'
    }]
  }, {
    organizationId: 9,
    organizationName: 'CCC',
    locales: {
      locales: ['US', 'US_MOTORS', 'CA', 'UK', 'AU', 'FR', 'ES', 'DE', 'IT', 'FRITES']
    },
    languages: ['English', 'French', 'Spanish', 'German', 'Italian'],
    groupContractList: [{
      organizationId: 0,
      organizationName: null,
      groupId: 'c75b906f-e78b-43fc-accc-f436113e6483',
      groupName: 'SD CCC'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '742bc40c-12d7-43ba-9780-b67f1575679a',
      groupName: 'CSI Metrics CCC'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '3f4e346b-0560-41d1-b424-e1d6881f9e9f',
      groupName: 'Adoption'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: 'df232af5-9e6b-4313-9557-21fc34a103cf',
      groupName: 'CCC QA'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '1b176988-a73f-4122-8603-a2bb99851655',
      groupName: 'Dictionary'
    }, {
      organizationId: 0,
      organizationName: null,
      groupId: '1ca74035-2cc9-4989-a84e-218ab4525359',
      groupName: 'Catalogs'
    }]
  }, {
    organizationId: 0,
    organizationName: 'N/A',
    locales: {
      locales: []
    },
    languages: ['N/A'],
    groupContractList: []
  }]
};
exports.getOrganizationsMock = getOrganizationsMock;