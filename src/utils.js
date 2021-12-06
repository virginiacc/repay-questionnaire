import { v4 as uuidv4 } from 'uuid';

export const conditionMet = ( condition, selections, show ) => {
  let selection = selections[condition.question];
  let type = condition.type;
  let answer = condition.answer;
  if ( type === 'exists' ) {
    return selection !== undefined;
  } else if ( condition.type === 'equals' ) {
    return Array.isArray( selection ) ? 
           selection.includes( answer ) : 
           selection === answer;
  } else if ( condition.type === 'not_equals' ) {
    return Array.isArray( selection ) ? 
           !selection.includes( answer ) : 
           selection !== answer;
  }
}

export const checkConditionGroup = ( group, selections, show ) => {
  let comparison_type = group.type;
  let conditions = group.conditions;
  if ( comparison_type === 'all' ) {
    return conditions.every(
      condition => conditionMet( condition, selections ) === true
    );
  } else if ( comparison_type === 'any' ) {
    conditions.forEach(
      condition => console.log(conditionMet( condition, selections, show ))
    )
    return conditions.some(
      condition => conditionMet( condition, selections ) === true
    );
  }
}

export const checkConditions = ( condition_block, selections ) => {
  const conditionsPassed = checkConditionGroup( 
  	condition_block, selections 
  );
  let groups = condition_block.condition_groups;
  if ( groups && groups.length > 0 ) {
    let results = [];
    groups.forEach( group => {
      results.push(checkConditionGroup( group, selections ))
    })
  	return condition_block.type === 'any' ?
  	 results.some( result => result === true ) :
     results.every( result => result === true );	   
  } else {
  	return conditionsPassed;
  }
}

export const checkFinished = ( questions, selections ) => {
  return questions.every( q => q.id in selections );
}

export const displayConditionsMet = ( obj, selections ) => {
  let condition_block = obj.condition_block || {};
  if ( !condition_block || 
       !condition_block.conditions || 
       !condition_block.conditions.length ) {
    return true;
  }
  return checkConditions( condition_block, selections );
}

export const getDisplayable = ( arr, selections ) => {
  return arr.filter(
    ( item ) => {
      return displayConditionsMet( item, selections )
    }
  );
}

export const getItemById = ( arr, id ) => {
  return arr.find( (item)  => item.id === id);
}

export const generateId = () => {
  return uuidv4();
}
