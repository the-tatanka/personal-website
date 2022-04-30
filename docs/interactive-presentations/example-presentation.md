---
sidebar_position: 2
---

# Example Presentation

import Presentation from "@site/src/components/presentation/Presentation";
import PresentationContainer from "@site/src/components/presentation/PresentationContainer";
import Slide from "@site/src/components/presentation/Slide";
import Title from "@site/src/components/presentation/Title";
import Paragraph from "@site/src/components/presentation/Paragraph";
import Content from "@site/src/components/presentation/Content";
import Column from "@site/src/components/presentation/Column";
import Image from "@site/src/components/presentation/Image";

import Bike1 from '@site/static/img/bike_1.webp';

<Presentation>
<PresentationContainer>

<Slide>
<Column width="12">

# Lorem ipsum dolor sit amet, consetetur

At vero eos et accusam et justo duo dolores et ea rebum.

> A greater than…

Some `backticks` for inline.

```js
backtick.fences("for blocks");
```

</Column>
</Slide>

<Slide>
<Column width="12">

# Image without scale

![Docusaurus logo](/img/bike_1.jpg)

</Column>
</Slide>

<Slide>
<Column width="12">

# Image with scale

<img src={Bike1} alt="Bike image" style={{width: "700px", height: "500px"}} />

</Column>
</Slide>

<Slide>
<Column width="12">

# Lists

- asterisks for unordered items

1. decimals and a dot for ordered items

</Column>
</Slide>

<Slide>
<Column width="12">
<Title>Lorem ipsum dolor sit amet, consetetur</Title>
<Paragraph>At vero eos et accusam et justo duo dolores et ea rebum. </Paragraph>
</Column>
</Slide>

<Slide>
<Column width="6">
<Title>Stet clita kasd gubergren</Title>

<Content>
<ol style={{ listStyleType: "decimal" }}>
  <li>At vero eos et accusam</li>
  <li>Et justo duo dolores et ea rebum</li>
  <li>Stet clita kasd gubergren</li>
</ol>
</Content>
</Column>

<Column width="6">
<Title>No sea takimata sanctus</Title>

<Content>
<ul style={{ listStyleType: "disc" }}>
  <li>Est Lorem ipsum dolor sit amet</li>
  <li>Sed diam nonumy eirmod tempor invidunt ut labore et</li>
  <li>Dolore magna aliquyam erat, sed diam voluptua</li>
  <li>Est Lorem ipsum dolor sit amet</li>
  <li>Sed diam nonumy eirmod tempor invidunt ut labore et</li>
  <li>Dolore magna aliquyam erat, sed diam voluptua</li>
</ul>
</Content>
</Column>
</Slide>

<Slide>
<Column width="6">
<Title>Sed diam nonumy eirmod</Title>
</Column>

<Image width="6" path={Bike1}/>
</Slide>

</PresentationContainer>
</Presentation>
