async function getMatchData(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=9a95fefb-3a28-4af1-9bfd-1844b4270307&offset=0")
    .then(data => data.json())
    .then(data => {
        if(data.status != "success") return;
console.log(data);
        const matchList = data.data;

        if(!matchList) return [];

        const IPLData = matchList.filter(match => match.matchType == "t20").map(match => `${match.name}, ${match.status}`);
        console.log(IPLData);
        document.getElementById("matches").innerHTML = IPLData.map(match => `<li>${match}</li>`).join();

        return IPLData;
    })
    .catch(err => console.error(err));
}

getMatchData();