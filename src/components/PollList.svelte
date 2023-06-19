<script>
  // import { onDestroy, onMount } from "svelte";
  import {fade,slide,scale} from 'svelte/transition';
  import {flip} from 'svelte/animate';
  import pollStore from "../stores/poll.store";
  import PollDetails from "./PollDetails.svelte";
  import { current_component } from 'svelte/internal';

//  let polls =[];

//  const unSubscription = pollStore.subscribe((data)=>{
//      polls = data;
//  });



//  onDestroy(()=>{
//     unSubscription();
//  })
</script>
<div class="poll-list">
    {#each $pollStore as poll (poll.id)}
        <!-- transition:fade  by adding local working localy only  transition only works with html elements -->
        <div in:fade out:scale|local animate:flip={{duration:500}}>

          <PollDetails {poll} />
        </div>
      {:else}
       I have no polls currently.!!
    {/each}
</div>
<style>
 .poll-list{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:20px;
 }
</style>