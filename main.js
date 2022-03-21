
      // connect to Moralis server

      const serverUrl = "https://zzhjcn4ygdfm.usemoralis.com:2053/server";
      const appId = "WuvN4cMUDRlGEvoVDFE0sU812V4wf0nNmne0GTC5";
      Moralis.start({ serverUrl, appId });

      
     async function getNFT(){
    let searchAddress = document.getElementById('inputAddress').value;
    const options = { chain: 'bsc', address: searchAddress };
    const BSCNFTs = await Moralis.Web3API.account.getNFTs(options);
    console.log(BSCNFTs);
   
   }

   
   


