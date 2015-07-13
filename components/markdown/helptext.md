You can use either a string and pass it in using `content`, or reference a separate file using `src`.

### As a string

```html
<rg-markdown content="{ md }"></rg-markdown>
```

and add this to your JavaScript

```javascript
this.md = '# RiotGear - rg-markdown';
```

### From a file

```html
<rg-markdown src="message.md"></rg-markdown>
```

This component relies on a third party markdown parsing library called **CommonMark**. You can find more information
about CommonMark from their website at <a href="http://commonmark.org">commonmark.org</a>.
