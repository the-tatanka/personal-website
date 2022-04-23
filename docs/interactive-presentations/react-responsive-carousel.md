---
sidebar_position: 2
---

import Presentation from "@site/src/components/presentation/Presentation";
import PresentationContainer from "@site/src/components/presentation/PresentationContainer";
import Slide from "@site/src/components/presentation/Slide";
import Title from "@site/src/components/presentation/Title";
import Column from "@site/src/components/presentation/Column";
import Image from "@site/src/components/presentation/Image";

<Presentation>
<PresentationContainer>

<Slide>
<Title>TEST</Title>
</Slide>

<Slide>
<Column width="6">
<Title>TEST 1</Title>
</Column>

<Column width="6">
<Title>TEST 2</Title>
</Column>
</Slide>

<Slide>
<Column width="6">
<Title>TEST image</Title>
</Column>

<Image width="6" path="/img/bike_1.jpg"/>
</Slide>

<Slide>
<Column width="6">
<Title>TEST image</Title>
</Column>

<Column width="6" style={{
        background: `url(./img/bike_1.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
</Column>
</Slide>

</PresentationContainer>
</Presentation>

![Docusaurus logo](/img/bike_1.jpg)
