### HTML
```html
<rg-markdown></rg-markdown>
```

### JavaScript

```javascript
var tags = riot.mount('rg-markdown', {
  markdown: {
    content: '**Some** content', // Use either content or URL
    url: 'helptext.md'
  }
})

tags[0].on('loading', function () { ... })
tags[0].on('loaded', function () { ... })
```

This component relies on a third party markdown parsing library called **CommonMark**. You can find more information
about CommonMark from their website at <a href="http://commonmark.org">commonmark.org</a>.
