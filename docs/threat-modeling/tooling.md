---
sidebar_position: 6
---

# Tooling

Threat modeling tools - in my opinion, an extremely overrated topic.

Essentially, you need to be able to draw a data flow diagram (DFD).

Being able to write down the threats and countermeasures is not a problem.

The following options are free:

- GitHub: With Mermaid.js support, a diagram can be created in markdown. Create DFD with Mermaid.js and note the threats in markdown.

- Almost any wiki platform / tool: Draw DFD with a Draw.io integration.

- [Threagile](https://github.com/Threagile/threagile): Create a DFD through a YAML config. Tool also generates an initial list of matching threats. You can add your own threats. Very cool tool!

- OWASP Threat Dragon: DFD can be drawn through joint.js. Drawing the trust boundaries is a bit buggy. Supports STRIDE.

- Microsoft Threat Modeling Tool: DFD can be drawn. Supports STRIDE. Is a desktop app :(.

Another option is to create your own threat modeling tool. It's not rocket science! Also the DFD creation is the biggest challenge here. If you are comfortable with having the DFD generated, this is not a problem either. Can be done for example by Mermaid.js.

With the help of a low code platform such a tool can be created within a day!

:::danger Take care

Because threat models contain mostly confidential data, it is important to pay attention to where the data is stored.

:::
