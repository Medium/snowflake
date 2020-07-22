# Tool for Assessing Computer Operators (🌮)

TACO started out as Medium's [career growth](https://medium.com/s/engineering-growth-framework) tool. It was compatible enough with how we do things at Forager that we forked it and adapted it for our own use.

This is very much a work in progress and anything here many change at any time. We will continue iterating as we learn more.

## Philosophy

We liked a lot of things about Medium's career growth framework, and other similar frameworks we've encountered in other organizations. Here are the things we liked about others' career frameworks that we've adopted for ours:

##### The algorithm is open source

If you think someone is at the wrong level, you can run the numbers yourself. If you find a problem, you can make a suggestion or even make a pull request that fixes it. This doesn't completely eliminate bias and subjectivity, but it definitely helps.

##### Diversity is embraced

A successful engineering organization does not consist of a homogeneous group of ninja hackers crushing the code exactly the same way. By explicitly valuing a wide range of skills, we can encourage the unique contributions that each indvidual brings to the team. Diversity makes us more flexible and creative.

##### Clear path to advancement

No more guesswork or fuzzy answers about what you need to do in order to get promoted. Pick any track on which you'd like to improve and start looking for opportunities to demonstrate the next milestone.

##### Managers and makers get equal treatment

Each manager level is tied to a corresponding maker level so you don't have to go into management to advance. Forcing someone to become a manager is a great way to get bad managers.

##### Performance evaluation is easy

Proponents of strong CI/CD systems argue that when deployment is easy, you will naturally do it more often. The same applies for performance evluation. If you do it continuously, you catch bugs fast and will be much less likely to end up with large breaking changes.

## Overview

People are evaluated on a number of different `tracks`. Each track defines a set of advancement `milestones` which will earn you more `points`. More advanced milestones are worth more points, because it is harder to achieve total mastery of something than to achieve a basic familiarity.

In order to advance to the next `tier`, you must accumulate a certain number of points. Multiple tiers are grouped into a `level`, which has one or more `titles` associated with it. There are more tiers than levels so we can standardize compensation at each tier and still offer granular advancement opportunities.

##### Tracks & Categories

Each track encapsulates a group of related knowledge and abilities, such as front-end development or communication skills.

The different tracks are grouped into a few high-level `categories`, such as technical skills. In addition to a points requirement, each level advancement requires that you achieve an increasingly high minimum number of points in every category. You can't truly achieve higher levels of effectivness if some of your skills are lagging too far behind.

Since this is an engineering career growth framework, there are intentionally more tracks available in the `technical` category.

The dedicated `management` track will not be relevant for non-managers. It is intended to offset the fact that most managers become more hands-off and are not spending as much time advancing their technical skills. For non-managers, even those with management experience, this should be evaluated as a zero.

##### Milestones 

A milestone rating should represent the skills and behaviors a person can currently and consistently produce in a given track.

Milestones are defined from 0 to 5. The "base class" implementation of each level follows this progression:

| Milestone | Skill Level            | Scope of Responsibility       |
|:---------:|:-----------------------|:------------------------------|
| 0         | No proven track record | None                          |
| 1         | Basic proficiency      | Simple task or component      |
| 2         | Reliable contributor   | Complex task or component     |
| 3         | Starting to lead       | Small team or project         |
| 4         | Reliable leader        | Large team or milestone       |
| 5         | Leader of leaders      | Entire organization           |

Each milestone should build upon everything from all the levels below it. For example, a milestone 3 rating implies all of the skills and behaviors of milestones 1 and 2 as well.

The examples provided in the tool are intended as an illustration -- not necessarily a checklist, and certainly not an exhustive list. When in doubt, use the chart above to give grounding to an evaluation.

Having abilities that are _current_ does not necessarily require recent experience. Some engineers may not have worked on SQL for several years, but could still pick up a SQL task tomorrow at their previous level of proficiency; they should continue to be rated at their previous level of proven ability. Other engineers may be rusty after not using a skill for several years; they should be adjusted downward to match their current abilities.

Demonstrating a milestone _consistently_ means that there have been no significant lapses during the last several months. No one is ever 100% perfect, but proving proficiency requires consistency. Many people will occasionally or sporadically demonstrate a level of proficiency one or two levels higher than they can produce reliably.

For most tiers, the ratings of a well balanced team should form a normal distribution with a mode of around 2.5.

##### Tiers & Levels

Each tier earns a base salary increase, while each level earns a new title:

| Level | Maker Track Title            | Manager Track Title        |
|:-----:|:-----------------------------|:---------------------------|
| 0     | Apprentice Software Engineer |                            |
| 1     | Junior Software Engineer     |                            |
| 2     | Software Engineer            |                            |
| 3     | Senior Software Engineer     | Engineering Manager        |
| 4     | Staff Software Engineer      | Senior Engineering Manager |
| 5     | Principal Software Engineer  | Director of Engineering    |

The role expectations for each level roughly correspond with the description of its corresponding milestone. For example, both senior engineers and engineering managers are at a place in their careers where they are starting to lead.

While a milestone rating of 3 is intended to approximate a "senior engineer" level of proficiency on the technical track, the level math is set up so that you do not have to get 3 milestones across the board to get to level 3. Everyone will have some tracks above their level and some below their level, which is normal.

## Usage (for managers)

You should already be having regularly scheduled 1:1s with your people every one or two weeks. Once a quarter (every 3 months / 90 days), set aside one of these 1:1s to perform this evaluation together. You should both think about it beforehand and come prepared with a milestone rating for every track.

For each track, share what milestone you each put for that track.

* If the numbers are identical, you are in agreement. Don't waste time hashing it out unless there are questions about how to improve the rating.
* If the numbers are different by one, ask if there's anything that needs to be discussed. Many ratings could go either way ("I think I'm a 2 or 3, so I put 3") so there's often not any real disagreement here. Spend a minute or two naming the factors behind the rating and highlight why you each chose what you did.
* If the numbers are different by two or more, this is a serious disconnect. However, it is normal for this to happen periodically, so resolve the misunderstanding as nonjudgmentally and objectively as possible. Spend several minutes reviewing the milestone definitions and discussing why each of you chose the milestone you did.

At the end, look at the final result and discuss whether it seems like a fair and accurate assessment. This tool is a work in progress, so be sure to ask whether it missed anything and take any critical feedback seriously.

It can be helpful to look at the "error bars" as well. Any time you or the engineer is on the fence between two numbers during the evaluation, or your initial evaluations are different, write down both numbers. Then run one version of the evaluation where you always take the higher number, and one version where you always take the lower number. This exercise can help illustrate what someone's best or worst day looks like, or what someone's near-term potential is.

## Contributions

You are free to use, change, and build on this work to make it useful for your organization.

If you just want to plug in your own levels and logic, you should be able to make changes only to `./types/definitions.ts` and have everything just work.

## Installation

Get yarn if you don’t have it already:

`npm install -g yarn`

Install dependencies:

`yarn`

### Running the dev server

`yarn dev`

### Building

`yarn export`

This will put a static version of the site in `out/`.
