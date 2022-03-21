
      // connect to Moralis server

      const serverUrl = "";
      const appId = "";
      Moralis.start({ serverUrl, appId });

      
     async function getNFT(){
    let searchAddress = document.getElementById('inputAddress').value;
    const options = { chain: 'bsc', address: searchAddress };
    const BSCNFTs = await Moralis.Web3API.account.getNFTs(options);
    console.log(BSCNFTs);
   
   }

   
   


