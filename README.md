# aurora-net

**Aurora-Net** is a modular security telemetry and deception platform that turns low-level system events and honeypot traffic into **high-context, analyst-ready detections in real time**.

- **Sensors** on the edge (eBPF + Go) watching processes, syscalls, and network flows
- **Streaming pipeline** normalizing and shipping events
- **Analysis engine** combining rules + anomaly detection
- **Deception layer** of fake assets that attract attackers
- **Ops console** that gives an analyst a single, high-context view of “what’s really happening”

---

## Core ideas

- **Pluggable sensor architecture**  
  Attach lightweight agents (eBPF + Go) to hosts and services. Each sensor emits normalized events into the pipeline without hard-coding to a specific SIEM.

- **Deception-first thinking**  
  You don’t just wait for alerts; you **instrument fake assets** (APIs, admin panels, IoT devices) so that _any_ interaction is suspicious by design.

- **High-context detections**  
  The platform enriches raw events (process tree, geo/IP info, MITRE ATT&CK mapping, prior activity) so an analyst gets **actionable context**, not just a noisy log line.

- **Anomaly + rules, not either/or**  
  Simple rules catch known bad; an anomaly layer looks for weird behavior across processes, hosts, and time windows.

- **Designed for learning & iteration**  
  The codebase is intentionally small but **engineering-heavy**: clean boundaries, layered architecture, explicit schemas, and room to swap components (Kafka vs Redis, different models, etc.).

---

## High-level architecture

```text
        [ eBPF + Go Sensors ]          [ Deception Assets ]
         (process, net, syscalls)      (fake APIs / portals / IoT)
                    │                          │
                    └────────► [ Ingestion Pipeline ]
                                (Kafka / Redis Streams, schemas)

                                │
                                ▼
                     [ Analysis Engine ]
            - Feature extraction & anomaly models
            - Rules engine (Sigma-style)
            - Enrichment (MITRE, geo, process tree)

                                │
                                ▼
                     [ Ops Console (UI) ]
           - Timeline of activity across hosts/assets
           - Alert details with full context
           - Data lineage and event drill-down
```
