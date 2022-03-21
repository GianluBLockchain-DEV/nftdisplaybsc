
      // connect to Moralis server

      const serverUrl = "https://zzhjcn4ygdfm.usemoralis.com:2053/server";
      const appId = "WuvN4cMUDRlGEvoVDFE0sU812V4wf0nNmne0GTC5";
      Moralis.start({ serverUrl, appId });

      
     async function getNFT(){
    let searchAddress = document.getElementById('inputAddress').value;
    const options = { chain: 'bsc', address: searchAddress };
    const BSCNFTs = await Moralis.Web3API.account.getNFTs(options);
    //console.log(BSCNFTs);
    BSCNFTs.array.forEach(element => {
        
    });(function(nft){
        let url = nft.token_uri;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            $("#content").html($("#content").html()+"<h2>"+data.name+"</h2>");
            $("#content").html($("#content").html()+"<h3>"+data.description+"</h3>");
            $("#content").html($("#content").html()+"<video type='video/mp4' width='320' height='240' src='+data.animation_url+'/>");
            
        })
    })
   }

   
   


