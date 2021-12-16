# netlify-cms-guitar-chords

Netlify CMS plugin to support guitar chord widgets.

## Install

As an npm package:

1. Install the widget:

```
npm i netlify-cms-guitar-chords
```

2. Import the widget in the netlifyCMS file:

```
import { NetlifyCmsWidgetGuitarChords } from 'netlify-cms-guitar-chords';
```

3. Register the widget ready for use:

```
CMS.registerWidget(NetlifyCmsWidgetGuitarChords)

```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-guitar-chords@^1.0.0/dist/index.js"></script>
<script type="text/javascript">
  CMS.registerWidget(NetlifyCmsWidgetGuitarChords);
</script>
```
