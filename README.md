# Snowflake

Snowflake started out as Medium's [career growth](https://medium.com/s/engineering-growth-framework) tool. It was compatible enough with how we do things at Forager that we forked it and adapted it for our own use.

This is very much a work in progress and anything here many change at any time. We will continue iterating as we learn more.

## Philosophy

We liked a lot of things about Medium's career growth framework, and other similar frameworks we've encountered in other organizations. Here are the things we liked about others' career frameworks that we've adopted for ours:

###### The algorithm is open source

If you think someone is at the wrong level, you can run the numbers yourself. If you find a problem, you can make a suggestion or even make a pull request that fixes it. This doesn't completely eliminate bias and subjectivity, but it definitely helps.

###### Diversity is embraced

A successful engineering organization does not consist of a homogeneous group of ninja hackers crushing the code exactly the same way. By explicitly valuing a wide range of skills, we can encourage the unique contributions that each indvidual brings to the team. Diversity makes us more flexible and creative.

###### Clear path to advancement

No more guesswork or fuzzy answers about what you need to do in order to get promoted.

###### Managers and makers get equal treatment

Each manager level is tied to a corresponding maker level so you don't have to go into management to advance. Forcing someone to manage people is a great way to get bad managers.

###### Performance evaluation is easy

Proponents of strong CI/CD systems argue that when deployment is easy, you will naturally do it more often. The same applies for performance evluation. If you do it continuously, you catch bugs fast and will be much less likely to end up with large breaking changes.

## Overview

People are evaluated on a number of different `tracks`, such as front-end development or communication skills. Advancing along a track will earn you more `points`. More advanced steps on a track are worth more points, because  it is harder to achieve total mastery of something than to achieve a basic familiarity.

In order to advance to the next `tier`, you must accumulate a certain number of points. Multiple tiers are grouped into a `level`, which has one or more `titles` associated with it. There are more tiers than levels so we can standardize compensation at each tier and still offer more granular advancement opportunities.

The different tracks are grouped into a few high-level `Categories`, such as technical skills. In addition to a points requirement, each level  advancement requires that you achieve an increasingly high minimum number of points in every category. You can't truly achieve higher levels of effectivness if some of your skills are lagging too far behind.

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
