# vscode-wikipedia-hyperlink

 Adds a hyperlink to a wikipedia article for the currently selected text in a markdown or html file

 **Usage**: 

 ```js
     "commands": [
      {
        "command": "wikipedia-link.addHyperlink",
        "title": "Wikipedia: add link"
      }
    ]
```



## Notes

Fork of [https://github.com/wasi-master/vscode-wikipedia-hyperlink/](https://github.com/wasi-master/vscode-wikipedia-hyperlink/) because I didn't want the link summary. 

I made a comment on the upstream original asking the author to consider it an option ( e.g. [https://github.com/wasi-master/vscode-wikipedia-hyperlink/discussions/2](https://github.com/wasi-master/vscode-wikipedia-hyperlink/discussions/2) ). 

I modified the extension ID to leave the original available to if the option comes available and installed a package to publish a .VSIX file so that I could sync it with **codepaces** so that when I'm writing on my iPad I can use it.
