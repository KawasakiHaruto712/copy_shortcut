document.addEventListener("keydown", event => {
    if (event.ctrlKey && event.metaKey && event.key === "c"){
        copyToClipboard()
    }
})

function copyToClipboard(){
    var url = location.href;
    navigator.clipboard.writeText(url)
    .then(() => {
        console.log("URLのコピーに成功しました")
    })
    .catch(err => {
        console.log("URLのコピーに失敗しました\n" + err)
    })
}