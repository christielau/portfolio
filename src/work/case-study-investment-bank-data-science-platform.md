---
layout: layouts/case-study.njk
permalink: "/work/caseStudy-investmentBank-dataSciencePlatform/"
title: "Designing a live internal data-science operations platform for specialist users"
client: "European Tier 1 Investment Bank"
role: "Lead product and service designer"
summary: "From a three-week concept to MVP-ready specs and a live self-service portal—I gave data scientists and delivery managers operational visibility across fragmented tools so they could prioritise work, spend, and handoffs with less guesswork."
tags:
  - Internal tooling
  - Specialist users
  - Operational visibility
theme: coral
order: 3
cardImage:
  src: "/assets/images/data-science-platform-case-card.png"
  alt: "Internal data platform on a laptop: project Jobs view with outcome metrics, VCore usage over time, and job cost tooltip."
  fit: contain
modules:
  - type: "hero"
    eyebrow: "European Tier 1 Investment Bank · Internal platform"
    heading: "Specialist users were shipping models while blind to ownership, spend, and blockers."
    subheading: "I reframed the platform as an operating-system layer: modular launcher, project spaces, and usage views—incremental integration instead of pretending one UI could replace every legacy system."
    tags:
      - Internal tooling
      - Specialist users
      - Operational visibility

  - type: "projectSnapshot"
    title: "Project snapshot"
    items:
      - { label: "Client", value: "European Tier 1 Investment Bank" }
      - { label: "Role", value: "Lead product and service designer (proposition → UI specifications)" }
      - { label: "Users", value: "Data scientists, delivery managers, tenant admins" }
      - { label: "Scope", value: "Journey and service model, IA, usage views, MVP specs; iterative design with architecture and offshore engineering" }

  - type: "mediaFigure"
    holder: true
    caption: "Project Jobs view: outcome counts, resource usage (VCores / memory), and cost signals so teams could prioritise delivery and spend without leaving the workspace."
    image:
      src: "/assets/images/data-science-platform-case-card.png"
      alt: "Dark UI showing project summary, Jobs tab with success and failure KPIs, VCore timeline, and tooltip with job cost versus budget."

  - type: "metricRow"
    title: "Delivery arc"
    caption: "Concept through implementation-ready outputs—not abstracted cost savings."
    metrics:
      - { value: "3 wks", label: "concept sprint: principles, IA, first usable structures" }
      - { value: "7 mo", label: "to MVP-ready package and path to UAT" }
      - { value: "Live", label: "self-service portal for project and usage visibility" }
      - { value: "Iterative", label: "design / test / ship with PO, architect, devs, offshore team" }

  - type: "callout"
    tone: "brand"
    label: "The problem"
    text: "Heavy investment in capability sat on top of fragmented tools, documentation, and status. Decisions slowed because operational signals—who owned what, what was blocked, where compute went—lived in different places."

  - type: "reflectionBlock"
    title: "What I made legible"
    paragraphs:
      - "Journey work traced how data scientists and delivery managers crossed tooling, data access, approvals, and handoffs. Workshops surfaced repeat failure modes: opaque status, unclear ownership when jobs or environments stalled, and compute anxiety collapsing into delivery-risk conversations."
      - "The future-state model positioned the platform as a coherent layer: launcher into applications and project spaces, not a monolithic replacement for upstream systems."
    bullets:
      - "Project-level views for individual accountability; tenant-level views for portfolio governance"
      - "Usage and health signals framed as operational decisions, not vanity metrics"
      - "Modular integration sequencing so roadmap debates focused on service maturity, not feature pile-on"

  - type: "mediaFigure"
    caption: "Modular integration map: a service-layer portal that creates coherence without pretending to replace every legacy system."
    image:
      src: "/assets/images/ds-platform-integration-map.svg"
      alt: "Central portal or service layer connecting to multiple systems such as data access, provisioning, compute, monitoring, documentation, and support."

  - type: "mediaFigure"
    caption: "Triage flow that made ownership and blockers visible when jobs or environments stalled."
    image:
      src: "/assets/images/ds-platform-triage-flow.svg"
      alt: "Flowchart showing detection of a stalled job or environment, a decision on self-serve recovery versus escalation, and traceable resolution."

  - type: "mediaFigure"
    caption: "Strategy trade-off: modular wrapper plus integration sequencing versus monolithic replacement."
    image:
      src: "/assets/images/ds-platform-strategy-tradeoff.svg"
      alt: "Side-by-side comparison of monolithic replacement versus modular wrapper and integration, with the chosen approach highlighted."

  - type: "processSection"
    title: "How I approached it"
    steps:
      - { title: "Mapped cross-system workflows", body: "Exposed dependencies and handoff failures that slowed delivery." }
      - { title: "Reframed platform purpose", body: "Service layer for operational awareness and control—not another standalone tool." }
      - { title: "Designed control views", body: "IA and flows centred on project health, usage, and day-to-day admin actions." }
      - { title: "Aligned build partners", body: "MVP-ready specifications paired UX intent with technical constraints for offshore implementation." }

  - type: "decisionBlock"
    title: "Key decisions unlocked"
    decisions:
      - { title: "Integration strategy", body: "Incremental wiring into existing estate versus big-bang replacement." }
      - { title: "MVP core", body: "Self-service visibility and controls before deeper collaboration features." }
      - { title: "Monitoring model", body: "Project- and tenant-level signals as decision tools, not audits." }
      - { title: "Roadmap principle", body: "Operational coherence and integration sequencing ahead of feature accumulation." }

  - type: "metricRow"
    title: "Evidence"
    caption: "Direction, alignment, and build readiness—no claimed € savings without measured programme data."
    metrics:
      - { value: "MVP-ready", label: "interface and specification package for engineering" }
      - { value: "Cross-functional", label: "shared journey and service artefacts for Product, architecture, engineering" }
      - { value: "Operational", label: "monitoring views to prioritise governance and delivery trade-offs" }

  - type: "reflectionBlock"
    title: "Evidence boundary"
    paragraphs:
      - "This case shows live internal tooling, specialist-user alignment, and readiness for delivery and UAT."
      - "It does not claim quantified productivity uplift or infrastructure cost reduction without post-launch operational measurement attributed to the programme."
---
