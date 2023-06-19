<script>
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import PollList from "./components/PollList.svelte";
  import Tab from "./shared/Tab.svelte";

  //tabs
  const items = ['Current Polls','Add New Poll'];
  let activeItem = 'Current Polls';

  const tabChange = (e)=>{
    activeItem = e.detail
  }


  const addData = (e)=>{
	activeItem = 'Current Polls';
  }


 

</script>
<Header/>
<main>
	<!-- <Tab items={items} activeItem={activeItem} /> instead of this-->
	<Tab {items} {activeItem} on:tabChange={tabChange}/>
	{#if activeItem === 'Current Polls'}
		<PollList  />
	 {:else if activeItem === 'Add New Poll'}
	   <CreatePollForm on:add={addData}/>
	{/if}
</main>
<Footer/>
<style>
	main{
		max-width:960px;
		margin:40px auto;
	}
</style>