<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";
  import pollStore from "../stores/poll.store";
  
 let dispatch = createEventDispatcher();
 let fields = {question:'',answerA:'',answerB:''};
 let errors = {question:'',answerA:'',answerB:''};
 let valid = false;
 const submitHandler = ()=>{
    valid = true;
    if(fields.question.trim().length < 5){
        valid = false;
        errors.question = 'Question must be at least 5 character long';
    }else{
        errors.question = '';
    }

    if(fields.answerA.trim().length < 1){
        valid = false;
        errors.answerA = 'Answer A must not be empty';
    }else{
        errors.answerA = '';
    }

    if(fields.answerB.trim().length < 1){
        valid = false;
        errors.answerB = 'Answer B must not be empty';
    }else{
        errors.answerB = '';
    }

    if(valid){
     //submit form
     let poll = {...fields,votesA:0,votesB:0,id:Math.random()};
     //save to poll
     pollStore.update((currentPoll)=>{
      return [...currentPoll,poll];
     })
     dispatch('add');
    }
 }
</script>
<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text"  id="question" bind:value={fields.question}>
        <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text"  id="answer-a" bind:value={fields.answerA}>
        <div class="error">{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text"  id="answer-b" bind:value={fields.answerB}>
        <div class="error">{errors.answerB}</div>
    </div>
    <Button type="secondary" flat={true}>Add Poll</Button>
</form>
<style>
  form{
   width:400px;
   margin:0 auto;
   text-align: center;
   margin-bottom:15px;
  }
  .form-field{
    margin:18px auto;
  }
  input{
    width:100%;
    border-radius:6px;
  }
  label{
    margin:10px auto;
    text-align: left;
  }
  .error{
    font-weight: bold;
    font-size:12px;
    color:#d91b42;
    text-align: left;
  }
</style>