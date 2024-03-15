---
title: "🚀 Obsidian: Projects"
date: 2024-03-13
draft: false
author: "Oscar López" 
image: /images/articles/Obsidian-projects/cover-en.png
tags: 
  - obsidian 
  - productivity
  - tooling
  - systems
  - projects
---

Recently, I shared how I manage my knowledge base, and I promised to share the systems I use to organize and record information about my goals and projects, both in software and other disciplines.

This time, I want to delve into how I structure and advance in my projects, managing the tasks to be performed and those that arise along the way. As a developer, but also as an individual committed to achieving goals in various areas of my life, I have devised a system that allows me to maintain control and a global vision of each project, from its conception to its completion.

This system is not just about managing to-do lists, but about establishing a fluid workflow that adapts to the changes and challenges that arise in the process. Throughout this article, I will share the principles and tools I use to stay organized, productive, and focused on each of my projects, regardless of their complexity or scope. In particular, I will focus on how I manage the progress of my projects, as well as the tasks that arise as I progress through them.

## ❓ What is a project?

A project, from my perspective, encompasses any goal or objective that I seek to achieve in my life. It is not limited solely to the professional sphere but encompasses all facets of my existence, from developing personal skills to executing complex professional initiatives.

- **Personal skill development**: Learning to play a musical instrument, mastering a new language, or improving my interpersonal communication skills are examples of projects aimed at personal growth.

- **Professional development**: Creating a platform for a product, designing a new business management system, or launching a marketing campaign are projects focused on advancement and success in the workplace.

- **Exploration and learning**: Immersing myself in the study of a new programming language, familiarizing myself with an emerging framework, or delving into a specific field of knowledge are projects that fuel my intellectual curiosity and pursuit of continuous learning.

Each project has its own challenges, objectives, and timelines, but they all share the common purpose of driving my growth and development in different areas of my life. Effective management of these projects is essential to ensure that I can systematically progress towards achieving my goals and aspirations.

## 🏗️ Project Structure
### 🔍 Progress

In my system, the progress of a project is meticulously recorded in a list generated with Dataview. Every day, I review my journal or diary and record any progress related to the project in question. This may include significant advancements, obstacles overcome, or new lessons learned. I link each progress entry to the corresponding project and provide a detailed description of what happened. This practice allows me to maintain an overview of the days I have progressed in the project and helps me identify patterns in my work process.

For example, in my [memory practice project 🔗](https://oscarlp6.dev/memory-project/), I have a record of how I have been advancing in the project.

````md
# 🧠 Memory Project

## ➡ Progress
```dataview
LIST FROM [[]] AND #log
```
````

<img src="/images/articles/Obsidian-projects/image1-es.png" alt="Render of the progress section of a project" style="max-width: 100%; margin-bottom: 1em">

### 📋 Tasks

The task list is an essential component of my projects. Each task is described as actionably as possible, i.e., broken down into small, specific elements that can be performed individually. I use the ✅2024-03-14 notation from Dataview to mark the tasks I advance on a specific day. This allows me to maintain a detailed record of my daily progress and facilitates the review of completed tasks. Additionally, this way, when making my journal note, I can see the tasks I finished related to a certain project, a way to motivate myself and see that I am making progress.

Tasks in projects:

<img src="/images/articles/Obsidian-projects/image2-es.png" alt="Render of the task section of a project" style="max-width: 100%; margin-bottom: 1em">

In the journal note to see the progress in the day:

<img src="/images/articles/Obsidian-projects/image3-es.png" alt="View of project tasks achieved in the day" style="max-width: 100%; margin-bottom: 1em">

### 📝 Backlog

The backlog is a dynamic list of ideas and functionalities that I would like to incorporate into the project in the future. These ideas can arise during the project's development or as a result of reflection on its goals. I use the backlog to capture these ideas and review their feasibility and relevance at later times. When a backlog idea is considered viable and relevant, I transfer it to the task list for implementation. Each backlog is an independent note with the `backlog` tag, which allows me to organize and prioritize these ideas effectively.

For example, this is the backlog of the [memory practice project 🔗](https://oscarlp6.dev/memory-project/):


<img src="/images/articles/Obsidian-projects/image4-es.png" alt="View of project backlogs" style="max-width:100%; margin-bottom: 1em">

And the structure of the Dataview query to see all the backlogs we're registering:

````
## ✔ Backlog

```dataview 
LIST 
FROM [[]]
AND #backlog 
```
````

And each backlog is registered with the `backlog` tag

<img src="/images/articles/Obsidian-projects/image5-es.png" alt="Example of a backlog note" style="max-width: 100%; margin-bottom: 1em">

### ⚙️ Status

Each project is managed according to its current status. I use different statuses to categorize my projects:

- **Todo**: Projects that are viable and make sense but have not yet started.
- **Analyze**: Ideas that require analysis and do not yet have a defined plan.
- **In Progress**: Projects I am currently working on.
- **Closed**: Projects that have been completed and require no further attention.
- **Maintenance**: Completed projects that need ongoing maintenance.

### 🚀 Priority

I assign each project a priority to determine its relative importance among other projects. I use a priority scale based on multiples of 10, allowing me to adjust priorities as new projects or unexpected situations arise. This practice helps me focus my efforts on the most important projects and manage my time and resources better.

### ⏱️ Time

It is important to note that time management does not apply to all projects in the same way. However, in projects where a reasonable time estimate can be made, this section becomes relevant. The time section allows me to keep a detailed record of key temporal aspects, such as the project's start and end dates, time estimates, and actual time spent.

This information is especially useful when combined with the progress section. It allows me to analyze where I estimated time incorrectly, which aspects of the project took longer than expected, or identify what held me back at certain points in the project. This feedback helps me improve future time estimates and identify areas for improvement in my project management.

### 🎉 Conclusion

The implementation of this project management system has proven to be invaluable in my day-to-day life. Not only does it allow me to maintain a detailed track of my goals and projects, but it also provides the flexibility to explore additional ideas and functionalities that could enhance my projects in the future.

This approach is not just about advancing specific tasks but having a continuous source of information that allows me to learn from my past mistakes and successes. The ability to review my previous progress and see how challenges were overcome helps me constantly improve my approach and skills.

Furthermore, the data structure generated by this system allows me to create customized Dataview boards that provide a quick overview of my projects. I can easily identify which projects need attention or maintenance, which projects are in progress, and which ones could be my next areas of focus.

In summary, this system not only improves my productivity and organization but also fuels my motivation by providing a clear path to achieve my goals and a detailed record of my progress along the way."
