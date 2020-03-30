import React from 'react';
import Duplicates from './dist/Gizmo/pages/DuplicatesPage/Duplicates';
import { mockDecisions, mockReasons } from './dist/Gizmo/shared/DecisionMaker/mock';
import {
  mockSurvivorData,
  mockVictimArray,
  mockConfigurationAllEnabled,
  mockAgent
} from './dist/Gizmo/pages/DuplicatesPage/Duplicates/mock';

import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Duplicates
          survivorData={mockSurvivorData}
          victimArray={mockVictimArray}
          decisions={mockDecisions}
          reasons={mockReasons}
          jobTypeConfiguration={mockConfigurationAllEnabled}
          jobId={2541}
          rowsDone={{ totalDoneToday: 10, totalDone: 100 }}
          loggedInUser={mockAgent}
          rowId={'123445af764e65fb22a16e'}
          saveTask={() => {}}
          changeCategory={() => {}}
        />
    </div>
  );
}

export default App;
