# 🎯 SALES DASHBOARD - VISUAL MENU STRUCTURE

```
┌─────────────────────────────────────────────────────────────┐
│                   SALES REPRESENTATIVE                       │
│                      DASHBOARD                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  SIDEBAR MENU (Flat Structure - No Submenus)                │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  🏠  Home                                                    │
│      └─> /sales/dashboard                                   │
│      • Sales statistics & KPIs                              │
│      • Performance charts                                   │
│      • Recent opportunities                                 │
│                                                              │
│  👥  Clients                                                 │
│      └─> /sales/clients                                     │
│      • Complete CRUD                                        │
│      • Multi-contact management                             │
│      • Interaction history                                  │
│      • Integrated agenda                                    │
│                                                              │
│  🛒  Commandes                                               │
│      └─> /sales/commandes                                   │
│      • Devis, Orders, Contracts                            │
│      • Strategic validation                                 │
│      • Margin-based approval                                │
│      • Status tracking                                      │
│                                                              │
│  📊  Sondages                                                │
│      └─> /sales/sondages                                    │
│      • Custom surveys                                       │
│      • IA sentiment analysis                                │
│      • Predictive classification                            │
│      • Automated recommendations                            │
│                                                              │
│  📈  Pipeline de Ventes                                      │
│      └─> /sales/pipeline                                    │
│      • Kanban board (7 columns)                            │
│      • Drag & drop                                          │
│      • IA scoring (0-100)                                  │
│      • Revenue forecasting                                  │
│                                                              │
│  📍  Visites                                                 │
│      └─> /sales/visites                                     │
│      • Visit planning                                       │
│      • Structured reports                                   │
│      • Mobile quick entry                                   │
│      • IA assistant analysis                                │
│                                                              │
│  💬  Chat                                                    │
│      └─> /sales/chat                                        │
│      • Real-time messaging                                  │
│      • Discussion groups                                    │
│      • Document sharing                                     │
│      • @mentions & notifications                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## 📊 PAGE DETAILS

### 1. HOME DASHBOARD

```
┌─────────────────────────────────────────────────────────────┐
│  Home › Dashboard                                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │ CA Mois  │ │ Objectif │ │ Opport.  │ │ Visites  │      │
│  │ 67,000€  │ │  112%    │ │    48    │ │   35     │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│                                                              │
│  ┌───────────────────────────┐  ┌──────────────────┐       │
│  │ Performance Mensuelle     │  │ Pipeline        │       │
│  │ [Area Chart]              │  │ [Pie Chart]     │       │
│  │ Ventes vs Objectifs       │  │ Distribution    │       │
│  └───────────────────────────┘  └──────────────────┘       │
│                                                              │
│  ┌───────────────────────────┐  ┌──────────────────┐       │
│  │ Taux de Conversion        │  │ Opportunités     │       │
│  │ [Bar Chart]               │  │ Récentes         │       │
│  │ Par étape                 │  │ [Table]          │       │
│  └───────────────────────────┘  └──────────────────┘       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 2. CLIENTS

```
┌─────────────────────────────────────────────────────────────┐
│  Clients › Liste                         [+ Nouveau Client] │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [Search & Filters]                                         │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Raison Sociale  │ Secteur   │ CA Annuel │ Statut │ ⚙️ │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ TechCorp SARL   │ Tech      │ 125,000€  │ Actif  │ 👁️ │ │
│  │ Retail Plus SA  │ Commerce  │ 0€        │ Prospect│ 👁️ │ │
│  │ Digital Svcs    │ Services  │ 85,000€   │ Actif  │ 👁️ │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  [Pagination: 1 2 3 ...]                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Client Detail Modal: TechCorp SARL                         │
├─────────────────────────────────────────────────────────────┤
│  [Informations] [Contacts] [Historique] [Agenda]           │
│                                                              │
│  Informations Tab:                                          │
│  • Statut Juridique: SARL                                  │
│  • Secteur: Technologie                                    │
│  • CA Annuel: 125,000€                                     │
│  • Adresse, Téléphone, Email                               │
│                                                              │
│  Contacts Tab:                                              │
│  • Pierre Dupont (Décisionnaire)                           │
│  • Marie Martin (Acheteur)                                 │
│  • Jean Bernard (Technique)                                │
│                                                              │
│  Historique Tab:                                            │
│  • 2025-10-28: Visite - Présentation produits             │
│  • 2025-10-15: Appel - Suivi devis                        │
│  • 2025-10-01: Email - Envoi catalogue                    │
│                                                              │
│  Agenda Tab:                                                │
│  • 2025-11-05 14:00: Signature contrat                    │
│  • 2025-11-12 10:30: Audit besoins Q1                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 3. COMMANDES

```
┌─────────────────────────────────────────────────────────────┐
│  Commandes › Gestion               [+ Nouveau Document]     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │ Devis    │ │ Commandes│ │ Validation│ │ Contrats │      │
│  │ Attente  │ │ Actives  │ │ Requise   │ │ Actifs   │      │
│  │    8     │ │    12    │ │     3     │ │    15    │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ N°     │Type  │Client  │Montant│Marge│Valid.│Statut│⚙️│ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ 2024-  │CMD   │TechCorp│15k€   │14.5%│  ✅  │Actif │👁️│ │
│  │ 2024-  │DEV   │Retail  │8.5k€  │11.2%│  ⏳  │Envoyé│👁️│ │
│  │ 2024-  │DEV   │Digital │22k€   │9.8% │  ❌  │Bloqué│👁️│ │
│  │   156  │      │        │       │     │      │      │  │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  Validation Rules:                                          │
│  • Marge < 12% : 🔴 BLOQUÉ                                 │
│  • Marge 12-15% : 🟡 VALIDATION REQUISE                    │
│  • Marge > 15% : 🟢 APPROUVÉ                               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 4. SONDAGES

```
┌─────────────────────────────────────────────────────────────┐
│  Sondages › Gestion                   [+ Nouveau Sondage]   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │ Sondages │ │ Réponses │ │ Score IA │ │ Sentiment│      │
│  │ Actifs   │ │ Collecté │ │ Moyen    │ │ Global   │      │
│  │    8     │ │   193    │ │  80/100  │ │ Positif  │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Titre          │Type   │Réponses│Score│Sentiment│⚙️   │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ Satisfaction   │Satisf │45/50   │82   │Positif  │👁️ 📊│ │
│  │ Besoins Futurs │Besoins│28/100  │67   │Neutre   │👁️ 📊│ │
│  │ Retour Visite  │Visite │120/100 │91   │T.Positif│👁️ 📊│ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  🤖 IA Analysis Features:                                   │
│  • Automatic keyword extraction (positive/negative)         │
│  • Sentiment analysis (0-100 score)                        │
│  • Predictive client classification                         │
│  • Automated action recommendations                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 5. PIPELINE DE VENTES (Kanban)

```
┌─────────────────────────────────────────────────────────────┐
│  Pipeline › Vue Kanban              [+ Nouvelle Opportunité]│
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │ Opport.  │ │ Valeur   │ │ CA       │ │ Taux     │      │
│  │ Actives  │ │ Totale   │ │ Prévision│ │ Convers. │      │
│  │   48     │ │ 265,000€ │ │ 176,000€ │ │   68%    │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│                                                              │
│ ┌────────┐┌────────┐┌────────┐┌────────┐┌────────┐┌──────┐│
│ │Prospect││Contact ││RDV Pris││Proposit││Négoc.  ││Gagné ││
│ │  (15)  ││Établi  ││  (8)   ││  (6)   ││  (4)   ││ (3)  ││
│ ├────────┤├───(12)─┤├────────┤├────────┤├────────┤├──────┤│
│ │┌──────┐││┌──────┐││┌──────┐││┌──────┐││┌──────┐││┌────┐││
│ ││ABC   │││TechS  │││Retail │││Solut. │││Enter. │││Tech││││
│ ││12k€  │││15k€   │││22k€   │││35k€   │││45k€   │││67k││││
│ ││Prob10│││Prob30%│││Prob50%│││Prob70%│││Prob85%│││100││││
│ ││Score │││Score  │││Score  │││Score  │││Score  │││   ││││
│ ││45/100│││62/100 │││75/100 │││85/100 │││90/100 │││100││││
│ │└──────┘││└──────┘││└──────┘││└──────┘││└──────┘││└────┘││
│ │        ││        ││        ││        ││        ││      ││
│ │ [Drag] ││ [Drag] ││ [Drag] ││ [Drag] ││ [Drag] ││      ││
│ └────────┘└────────┘└────────┘└────────┘└────────┘└──────┘│
│                                                              │
│  💡 IA Features:                                            │
│  • Scoring 0-100 (montant, engagement, étape, historique)  │
│  • CA Prévisionnel = Montant × Probabilité                 │
│  • Alertes automatiques stagnation                          │
│  • Recommandations (ex: offre -10% après 60j)             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 6. VISITES

```
┌─────────────────────────────────────────────────────────────┐
│  Visites › Rapports                    [+ Nouvelle Visite]  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │ Visites  │ │ À Venir  │ │ Rapports │ │ Taux     │      │
│  │ Semaine  │ │          │ │ Attente  │ │ Réalisat.│      │
│  │    7     │ │    12    │ │    3     │ │   95%    │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Date/Heure │Client  │Type  │Objectif    │Statut  │⚙️  │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ 2025-11-05 │TechCorp│Comm. │Présentation│Planifié│👁️ ✏️│ │
│  │ 14:00      │        │      │produits    │        │    │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ 2025-10-28 │Retail  │Suivi │Satisfaction│Terminée│👁️📄│ │
│  │ 10:30      │        │      │livraison   │[Rapport│    │ │
│  │            │        │      │            │Mobile] │    │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  📝 Report Features:                                        │
│  • Structured writing (daily, weekly, monthly)             │
│  • Mobile quick entry (simplified form)                    │
│  • IA assistant analysis                                   │
│  • Export PDF/Excel/Word                                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 7. CHAT

```
┌─────────────────────────────────────────────────────────────┐
│  Chat › Messagerie Temps Réel                               │
├──────────────────────┬──────────────────────────────────────┤
│ 💬 Messages          │ Équipe Commerciale              🔧  │
│ [Search...]          ├──────────────────────────────────────┤
│                      │ Marie: RDV client...      10:45     │
├──────────────────────┤ Pierre: Qui peut prendre...  10:15  │
│ 👥 Équipe Commerc.  │ Jean: Je peux m'en occuper  10:20   │
│    RDV confirmé      │ Sophie: Confirmé pour 14h  10:45    │
│    [3 unread] 10:45  │                                      │
├──────────────────────┤ ─────────────────────────────────────┤
│ 🛠️ Support Client   │ [📎] [Type message...] [📨 Send]    │
│    Ticket résolu     └──────────────────────────────────────┘
│    Hier
│                      💬 Features:
├──────────────────────┤ • Real-time messaging
│ 👩 Marie Martin      │ • Discussion groups (Team, Support, Project)
│    OK réunion        │ • Document sharing
│    [1 unread] 08:20  │ • @mentions with notifications
├──────────────────────┤ • Message history linked to opportunities
│ 📁 Projet Retail     │ • Online/offline status
│    Devis validé      │ • Search conversations
│    2 Nov             │
└──────────────────────┘
```

## 🎨 COLOR LEGEND

```
🟦 Primary (#2563EB)   - Buttons, links, active states
🟧 Secondary (#F39C12) - Highlights, warnings
🟩 Success (#10B981)   - Success states, positive
🟥 Danger (#EF4444)    - Errors, alerts
🟨 Warning (#F39C12)   - Attention needed
⬜ Light (#F8FAFC)     - Card backgrounds
```

## 📊 NAVIGATION FLOW

```
Login → Dashboard → Select Role: "Sales Rep"
                          ↓
        ┌─────────────────┴─────────────────┐
        │     Sales Representative          │
        │         Dashboard                 │
        └─────────────────┬─────────────────┘
                          ↓
    ┌────────────────────────────────────────────┐
    │          Flat Sidebar Menu                 │
    ├────────────────────────────────────────────┤
    │ • Home (1 click)                          │
    │ • Clients (1 click)                       │
    │ • Commandes (1 click)                     │
    │ • Sondages (1 click)                      │
    │ • Pipeline (1 click)                      │
    │ • Visites (1 click)                       │
    │ • Chat (1 click)                          │
    └────────────────────────────────────────────┘
              ↓
    Every page in ONE CLICK!
    No submenus, no confusion!
```

---

**Last Updated**: November 2, 2025
**Status**: ✅ Complete
