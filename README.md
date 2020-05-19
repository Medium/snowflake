# Snowflake

Snowflake started out as Medium's [career growth](https://medium.com/s/engineering-growth-framework) tool. It was compatible enough with how we do things at Forager that we forked it and adapted it for our own use.

This is very much a work in progress and anything here many change at any time. We will continue iterating as we learn more.

## Philosophy

We liked a lot of things about Medium's career growth framework, and other similar frameworks we've encountered in other organizations. Here are the things we liked about others' career frameworks that we've adopted for ours:

##### The algorithm is open source

If you think someone is at the wrong level, you can run the numbers yourself. If you find a problem, you can make a suggestion or even make a pull request that fixes it. This doesn't completely eliminate bias and subjectivity, but it definitely helps.

##### Diversity is embraced

A successful engineering organization does not consist of a homogeneous group of ninja hackers crushing the code exactly the same way. By explicitly valuing a wide range of skills, we can encourage the unique contributions that each indvidual brings to the team. Diversity makes us more flexible and creative.

##### Clear path to advancement

No more guesswork or fuzzy answers about what you need to do in order to get promoted.

##### Managers and makers get equal treatment

Each manager level is tied to a corresponding maker level so you don't have to go into management to advance. Forcing someone to manage people is a great way to get bad managers.

##### Performance evaluation is easy

Proponents of strong CI/CD systems argue that when deployment is easy, you will naturally do it more often. The same applies for performance evluation. If you do it continuously, you catch bugs fast and will be much less likely to end up with large breaking changes.

## Overview

People are evaluated on a number of different `tracks`, such as front-end development or communication skills. Each track defines a set of advancement `milestones` which will earn you more `points`. More advanced milestones are worth more points, because  it is harder to achieve total mastery of something than to achieve a basic familiarity.

In order to advance to the next `tier`, you must accumulate a certain number of points. Multiple tiers are grouped into a `level`, which has one or more `titles` associated with it. There are more tiers than levels so we can standardize compensation at each tier and still offer more granular advancement opportunities.

The different tracks are grouped into a few high-level `categories`, such as technical skills. In addition to a points requirement, each level  advancement requires that you achieve an increasingly high minimum number of points in every category. You can't truly achieve higher levels of effectivness if some of your skills are lagging too far behind.

##### Tracks & Categories

Since this is an engineering career growth framework, there are intentionally more tracks available in the `technical` category.

The dedicated `management` track will not be relevant for non-managers. It is intended to offset the fact that most managers become more hands-off and are not spending as much time advancing their technical skills.

##### Milestones 

Milestones are defined from 0 to 5. There are specific examples in each track, but most of them follow this progression:

| Milestone | Description            |
|:---------:|:-----------------------|
| 0         | No proven track record |
| 1         | Basic proficiency      |
| 2         | Reliable contributor   |
| 3         | Starting to lead       |
| 4         | Reliable leader        |
| 5         | Leader of leaders      |

For most tiers, the ratings of a well balanced team should form a normal distribution with a mode of around 2.5.

##### Tiers & Levels

The role expectations for each level roughly correspond with the description of its corresponding milestone. For example, both senior engineers and engineering managers are at a place in their careers where they are starting to lead, just in different ways. However, the level math is set up so that you do not have to average a 3 across the board to get to level 3.

Within each tier 

## Usage (for managers)

You should already be having regularly scheduled 1:1s with your people every one or two weeks. Once a quarter (every 3 months / 90 days), set aside one of these 1:1s to perform this evaluation together. You should both think about it beforehand and come prepared with a milestone rating for every track.

For each track, share what milestone you each put for that track.

* If the numbers are identical, you are in agreement. Don't waste any more time hashing it out unless there are questions about how to improve the rating.
* If the numbers are different by one, ask if there's anything that needs to be discussed. Many ratings could go either way ("I think I'm a 2 or 3, so I just put 3") so there's often not any real disagreement here. Spend a minute or two reviewing the factors behind the rating and highlight why you chose what you did.
* If the numbers are different by two or more, this is a serious disconnect. Spent several minutes reviewing the milestone definitions and discussing why each of you chose the milestone you did. It is normal for this to happen periodically, so try to resolve the misunderstanding as nonjudgmentally and objectively as possible.

##### Promotions (TBD)

##### Underperformance (TBD)

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
