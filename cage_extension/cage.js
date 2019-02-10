function cage() {
	var resources = performance.getEntriesByType("resource");
	if (resources.length > nr){
		nr = resources.length
		var imgs = document.getElementsByTagName('img')
		Array.from(imgs).forEach((e)=>{e.setAttribute('src', 'https://i.imgur.com/a4CBVXS.png')})
		return
    }
	return
}
var nr = 0;
setInterval(cage, 1000)