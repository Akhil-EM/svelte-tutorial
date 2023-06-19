import {writable} from 'svelte/store';
const pollStore = writable([{
	id:1,
	question:'Python or Javascript?',
	answerA:'Python',
	answerB:'Javascript',
	votesA:10,
	votesB:8,
  },
  {
	id:2,
	question:'Html or Css?',
	answerA:'Html',
	answerB:'Css',
	votesA:6,
	votesB:10,
  },
  ]);

  export default pollStore;