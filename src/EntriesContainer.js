import React from 'react';
import EntryCardContainer from './EntryCardContainer';
import RecentEntriesTitle from './RecentEntriesTitle';

function EntriesContainer({ hasBeenSubmitted }) {
  return (
    <div id="entries">
      <RecentEntriesTitle />
      <EntryCardContainer hasBeenSubmitted={hasBeenSubmitted} />
    </div>
  );
}

export default EntriesContainer;