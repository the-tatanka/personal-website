---
sidebar_position: 2
---

# Rules of thumb

While it can be easy to find threats, it is important to realize that all threats have real-world consequences for the development team.

Concentrate your efforts on those where the attacker can cause real damage.

To help you guide your thinking about what kinds of threats deserve mitigation, here are some rules of thumb that you can use while performing your threat modeling.

If the data hasn’t crossed a trust boundary, you don’t really care about it.

If the threat requires that the attacker is ALREADY running code on the client at your privilege level, you don’t really care about it.

If your code runs with any elevated privileges (even if your code runs in a restricted svchost instance) you need to be concerned.

If your code invalidates assumptions made by other entities, you need to be concerned.

If your code listens on the network, you need to be concerned.

If your code retrieves information from the internet, you need to be concerned.

If your code deals with data that came from a file, you need to be concerned (these last two are the inverses of rule #1).

If your code is marked as safe for scripting or safe for initialization, you need to be REALLY concerned.

For more information on the rules, see https://docs.microsoft.com/en-us/archive/blogs/larryosterman/threat-modeling-again-threat-modeling-rules-of-thumb
