---
sidebar_position: 1
---

# Presentations

> “I used to enjoy getting up in front of an audience,” ... “I loved working the room. Now, I feel like I’m speaking into a black hole.”
>
> Pre-Covid, when we presented in person, we could rely on the audience response to confirm that our message was being received. In virtual presentations, however, we lack audience feedback. We no longer see body language. We often don’t see people nodding their heads (or nodding off if they are bored) and it is much harder to make eye contact. As a result, we feel like no one is listening. Unfortunately, this makes us even more anxious about speaking. And even worse, because we feel as if no one is listening, we speak as if no one is listening. We sound less connected to the audience. We speak in more of a monotone. We ramble and have trouble finishing a thought. This only makes the problem worse — it both reinforces our anxiety and makes for a poor presentation. After all, the more disconnected we sound, the harder it is for the audience to listen.
>
> The answer is to virtually simulate the call and response function we experience during in-person presentations.
>
> — [Sarah Gershman](https://hbr.org/2020/11/yes-virtual-presenting-is-weird)

**Interactive and collaborative presentations are key.**

Feedback from the audience must be gathered directly. The feedback can be provided through _presentation tools_ or verbal requests.

When slides take over, they can become an information dump, and the quality of the audience experience is greatly diminished. The audience naturally focuses on the slides, not the speaker. That’s because our eyes are more powerful than our ears.

It seems that lots of people are spending lots of time designing infographics that engage the audience and cut out the speaker. Perhaps in online training this use of captivating visuals is necessary, but in a causal meeting or webinar it should be banned.

A presentation is a time to step up to the role we have been given. That means leading people by talking directly to them, engaging with them, laughing with them, and letting them feel our presence. We sideline ourselves by letting this need for visuals to take over.

Here are [three ways](https://hbr.org/2020/11/yes-virtual-presenting-is-weird) to elicit greater audience response and connection:

- Use the chat, especially when you start: _Can everyone hear me?_ gets the presentation off to a weak start. You could begin with a relevant question and ask people to type the answer in the chat. For example, you might ask everyone to write one thing they hope to learn from the presentation.

- Even when the audience can’t respond, keep it conversational: One way to simulate the back and forth nature of a conversation is to ask **rhetorical questions** throughout your presentation. For example, when you introduce a new idea, you might say, _Are you ready to try something new?_ Or, if you want people to notice something, you might say, _Do you see the shift from low to high on the chart?_

- Empathize: By taking a few moments before a presentation to put yourself in the shoes of the listener, you will feel more emotionally connected to them when you speak.

---

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
