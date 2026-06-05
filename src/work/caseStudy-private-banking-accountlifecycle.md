---
layout: layouts/case-study.njk
permalink: "/work/caseStudy-private-banking-accountlifecycle/"
title: "Private Banking Lifecycle Management"
client: "Global Tier 1 Private Bank"
role: "Lead designer for service and operational workflows"
summary: "Made the early lifecycle legible so teams could agree ownership and ship the right journeys."
tags:
  - Service design
  - Regulated operations
  - Journey architecture
theme: brand
order: 1
modules:
  - type: "hero"
    eyebrow: "Global Tier 1 Private Bank · Account lifecycle"
    heading: "Private banking is a service model problem before it is a channel problem."
    subheading: "Polished touchpoints sat on top of unclear ownership. I mapped the early lifecycle (awareness through BAU) so client, RM, and operations work could be debated as one system, not a pile of features."
    tags:
      - Service design
      - Regulated operations
      - Journey architecture

  - type: "projectSnapshot"
    title: "Project snapshot"
    items:
      - { label: "Client", value: "Global Tier 1 Private Bank" }
      - { label: "Role", value: "Lead designer for service and operational workflows" }
      - { label: "Scope", value: "Early lifecycle: awareness → onboarding → implementation → BAU" }
      - { label: "Priority journeys", value: "Onboarding, document management, profile updates" }

  - type: "metricRow"
    title: "Impact"
    metrics:
      - { value: "100+", label: "touchpoints in one early-lifecycle view" }
      - { value: "2", label: "priority journeys taken to delivery-ready flows" }
      - { value: "Cross-functional", label: "ownership model agreed with Product, BA, Engineering, Compliance" }
      - { value: "Cross-regional", label: "RM users to serve UHNW" }

  - type: "callout"
    tone: "brand"
    label: "The problem"
    text: "Great relationship management can mask fragmented services. The bank had no shared view of who owned each moment, so self-serve versus RM-led versus operations-led stayed unresolved until build."

  - type: "reflectionBlock"
    title: "Making the service visible"
    paragraphs:
      - "Private banking journeys did not break in one place. They broke between teams; client, RM, and operations."
      - "We mapped the full lifecycle, from first contact through onboarding and into BAU."
      - "Not to document it. To expose what was not working."
    bullets:
      - "Over 100 touchpoints across client, RM, and operations"
      - "Manual work hidden behind \"digital\" journeys"
      - "Unclear ownership between RM-assisted and operations-led steps"
      - "Legacy data constraints shaping what was even possible"
    tailParagraphs:
      - "That map became the shared reference point."
      - "It shifted conversations from opinions to evidence, and gave the team a way to decide what to fix first."

  - type: "reflectionBlock"
    title: "Designing through relationship managers"
    paragraphs:
      - "We did not have direct access to high-net-worth clients."
      - "Relationship managers became our closest proxy."
      - "But they were not just \"users\". They were part of the service."
    media:
      image: "/assets/images/accountlifecycle-codesign-workshop-illustration.png"
      alt: "Co-design workshop with relationship managers walking through journeys on a shared digital board."
    paragraphsAfterMedia:
      - "We used co-design sessions to walk through real journeys with them:"
    bullets:
      - "where they stepped in"
      - "where they worked around the system"
      - "where they did not trust the process"
    tailParagraphs:
      - "Product, BA, Engineering, and Compliance joined the same sessions."
      - "That is where the gaps surfaced."
      - "Not in documentation. In the friction between how the service was meant to work, and how it actually did."

  - type: "processSection"
    title: "How I approached it"
    steps:
      - title: "Touchpoint narrative first"
        body: "Started on a shared digital board with text-only touchpoints across client, RM, and staff roles. The goal was a readable service story and handoffs, not polished UI."
        image: "/assets/images/accountlifecycle-first-draft-touchpoint-outline.png"
        alt: "First draft experience map on a shared board: text-only touchpoints and flows for client and relationship manager across early lifecycle phases."
      - title: "Co-design playback, then lo-fi scaffolding"
        body: "Remote sessions with relationship managers and Product walked the flow; I added lo-fi wireframes (design-system building blocks) and sector references so critique targeted moments, ownership, and data needs, not aesthetics."
        image: "/assets/images/accountlifecycle-lofi-wireframes-industry-refs.png"
        alt: "Lo-fi client and staff-portal wireframes on a shared board, with industry reference screens for benchmarking and direction."
      - title: "Expand the end-to-end journey"
        body: "Each playback pulled in more scenarios; the board grew into a fuller lifecycle view while UI counterparts explored hi-fi where feasibility and viability questions were tightest."
        image: "/assets/images/accountlifecycle-journey-expanded-end-to-end.png"
        alt: "Wide-format experience map on a shared board: client, RM, and operations layers with UI flows, personas, and annotations as the journey expanded end to end."
      - title: "Stakeholder alignment on the living board"
        body: "Walked a wider group (Compliance, Engineering, architecture, business) through the same artefact. Pairing narrative with selective hi-fi gave mixed design-maturity audiences a shared surface for technical and operational feedback as feasibility landed."
        image: "/assets/images/accountlifecycle-stakeholder-walkthrough-board.jpg"
        alt: "Stakeholder walkthrough on a shared digital board: annotated journey, feedback notes, and iterative updates across the private banking lifecycle."

  - type: "imageText"
    layout: image-left
    heading: "Turning journeys into decisions"
    bullets:
      - "The blueprint did not exist for its own sake. It forced decisions: who owns the moment, what data must exist, when RM input is mandatory, what breaks first."
      - "Front-stage and backstage dependencies sat together so Engineering and Compliance could argue exceptions and handoffs with the same picture."
      - "Implicit rules about self-serve versus assisted became explicit enough to implement."
    image: "/assets/images/accountlifecycle-service-blueprint-board.png"
    alt: "Panoramic service blueprint board: client and RM journeys above the line of visibility, backstage operations and controls below, aligned across the early lifecycle."

  - type: "mediaFigure"
    caption: "Service slice blueprint showing front-stage and backstage dependencies (and where identity verification can fail)."
    image:
      src: "/assets/images/pb-service-slice-signing.svg"
      alt: "Service blueprint slice with frontstage client and relationship manager steps and backstage operations and systems across authentication, upload, signing, and ops checks, with failure points highlighted."

  - type: "mediaFigure"
    caption: "Data dependency map showing why profile updates fail without a single source of truth."
    image:
      src: "/assets/images/pb-data-dependency-map.svg"
      alt: "System and data map showing email, phone, address, and identity records flowing into a client profile and across CRM, onboarding, authentication, and e-sign systems, with conflicts highlighted."

  - type: "mediaFigure"
    caption: "Edge-case decision tree used to make exceptions implementable (joint signing, retries, fallback to RM/ops)."
    image:
      src: "/assets/images/pb-joint-signing-decision-tree.svg"
      alt: "Decision tree for joint signing with authentication failures, retries, and assisted fallback paths."

  - type: "decisionBlock"
    title: "Key decisions unlocked"
    decisions:
      - { title: "Channel ownership", body: "Where each lifecycle moment is self-serve, RM-assisted, or operations-led." }
      - { title: "What ships first", body: "Document management and profile updates as immediate priorities." }
      - { title: "Exceptions before build", body: "Fallback paths named so teams did not invent them mid-sprint." }
      - { title: "Sequencing across regions", body: "UK and EMEA constraints visible in one plan." }

  - type: "reflectionBlock"
    title: "Evidence boundary"
    paragraphs:
      - "This case shows end-to-end service design across client, relationship manager, operations, compliance, and technology constraints—and how that became delivery-ready flows for priority journeys."
      - "It does not claim quantified post-launch efficiency or error-reduction metrics without measured data from operations."

---
