# Manager Dashboard - Guide Visuel Rapide

## 📱 Menu Sidebar Manager

```
┌─────────────────────────────┐
│ 🏠 Home                     │ → Dashboard Principal (KPIs temps réel)
├─────────────────────────────┤
│ 📈 Pipeline Avancé          │ → Kanban personnalisable + config étapes
├─────────────────────────────┤
│ 📄 Rapports IA              │ → Rapports structurés + assistant chat
├─────────────────────────────┤
│ 📊 Analytics IA             │ → Prévisions + saisonnalité + automatisation
├─────────────────────────────┤
│ 👥 Équipe                   │ → Performance commerciaux
├─────────────────────────────┤
│ 📉 Tableaux de Bord         │ → Legacy dashboards
├─────────────────────────────┤
│ 💬 Chat Équipe              │ → Messagerie temps réel
└─────────────────────────────┘
```

---

## 🏠 Page 1: Manager Dashboard (Home)

### Vue d'Ensemble

```
┌──────────────────────────────────────────────────────────────┐
│  Filtres: [Aujourd'hui] [Semaine] [Mois] [Année]             │
└──────────────────────────────────────────────────────────────┘

┌───────────────┬───────────────┬───────────────┬───────────────┐
│ Ventes Jour   │ Pipeline      │ Taux Conv     │ Perf Équipe   │
│ 45 000€/50k   │ 3.5M€         │ 32%           │ 87/100        │
│ ████████░ 90% │ CA: 1.25M€    │ +3% vs prev   │ 12 alertes    │
└───────────────┴───────────────┴───────────────┴───────────────┘

┌──────────────────────────────────────────────────────────────┐
│ 🚨 Alertes IA & Recommandations                               │
├──────────────────────────────────────────────────────────────┤
│ ⚠️  3 deals stagnent 14j+ (Retail, ABC, XYZ) [Voir détails]  │
│ ⚠️  5 clients inactifs 60j (85k€ opportunité) [Analyser]     │
│ ✅  Marie Martin +20% vs objectif              [Féliciter]   │
│ ℹ️  CA prév: 1.25M€ (objectif 1.2M€)          [Rapport]      │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ Ventes vs Objectifs vs Prévisions IA                          │
│                                                                │
│    [Graphique Barres: Ventes/Objectif/Prévision par semaine] │
│                                                                │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ Performance Équipe Commerciale                                │
├──────────────────────────────────────────────────────────────┤
│ Commercial      │ Ventes   │ Objectif │ Taux │ Deals│ Score  │
│ Jean Dupont     │ 125k€    │ 150k€    │ 83% │  12  │ 92 🏆  │
│ Marie Martin    │ 142k€    │ 150k€    │ 95% │  15  │ 95 🏆  │
│ Pierre Bernard  │ 98k€     │ 120k€    │ 82% │  10  │ 85     │
│ Sophie Laurent  │ 156k€    │ 150k€    │ 104%│  18  │ 98 🏆  │
│ Luc Petit       │ 87k€     │ 100k€    │ 87% │   8  │ 78     │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ 💡 Assistant IA - Suggestions du Jour                         │
├──────────────────────────────────────────────────────────────┤
│ 1️⃣ Relancer 3 devis expirés 3j (ABC, XYZ, Tech Solutions)    │
│ 2️⃣ Offre fidélité -10% pour 5 clients inactifs 6 mois       │
│ 3️⃣ Démo produit pour Retail Plus (score IA: 85/100)         │
│ 4️⃣ Pic ventes prévu semaine prochaine (+15%)                │
└──────────────────────────────────────────────────────────────┘
```

---

## 📈 Page 2: Pipeline Avancé

### Kanban Personnalisable

```
┌──────────────────────────────────────────────────────────────┐
│ Stats: 185k€ total | 125k€ prévisionnel | 39 deals | ⚠️ 3   │
│ Secteur: [Général ▼] [Immobilier] [⚙️ Configurer]           │
└──────────────────────────────────────────────────────────────┘

⚠️ Attention: 3 affaires stagnent 14+ jours. Relance recommandée

┌─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│Prospect │ Contact │   RDV   │Proposit.│ Négoc.  │  Gagné  │
│  2 • 21k│  1 • 15k│  1 • 22k│  1 • 35k│  2 • 73k│ 1 • 67k │
├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│┌───────┐│┌───────┐│┌───────┐│┌───────┐│┌───────┐│┌───────┐│
││⚠️ 15j  ││         ││ ABC    ││ Sol.   ││ Ent.   ││Tech    ││
││ABC Sol.││TechStart││ Corp   ││ Corp   ││ SA     ││Corp    ││
││12 000€ ││15 000€  ││22 000€ ││35 000€ ││45 000€ ││67 000€ ││
││        ││         ││        ││        ││        ││        ││
││Prob 10%││Prob 30% ││Prob 50%││Prob 70%││Prob 85%││Prob100%││
││████    ││██████   ││████████││████████││████████││████████││
││        ││         ││        ││        ││        ││        ││
││IA: 45  ││IA: 62   ││IA: 75  ││IA: 85  ││IA: 90  ││IA: 100 ││
││CA: 1.2k││CA: 4.5k ││CA: 11k ││CA: 24.5│││CA: 38k ││CA: 67k ││
││        ││         ││        ││        ││        ││        ││
││Contact:││Contact: ││Contact:││Contact:││Contact:││Contact:││
││Jean D. ││Pierre M.││Sophie L││Anne P. ││Thomas G││Pierre D││
││Com:    ││Com:     ││Com:    ││Com:    ││Com:    ││Com:    ││
││Marie M.││Sophie L.││Jean D. ││Marie M.││Sophie L││Jean D. ││
││        ││         ││        ││        ││        ││        ││
││📅 11/10││📅 11/08 ││📅 11/05││📅 11/03││📅 11/02││📅 10/28││
││📄 0    ││📄 1     ││📄 2    ││📄 2    ││📄 2    ││📄 1    ││
││        ││         ││        ││💡Prior.││💡Prior.││        ││
││💡Rel.  ││         ││        ││        ││        ││        ││
│└───────┘│└───────┘│└───────┘│└───────┘│└───────┘│└───────┘│
└─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

[+ Nouvelle Affaire]
```

### Modal Configuration Étapes

```
┌──────────────────────────────────────┐
│ ⚙️ Configuration Étapes Pipeline     │
├──────────────────────────────────────┤
│ Secteur: [Général ▼]                 │
│                                       │
│ Étapes Actuelles:                    │
│ ┌──────────────────────────────────┐ │
│ │ 🔵 Prospect              [✏️][🗑️] │ │
│ │ 🔵 Contact Établi        [✏️][🗑️] │ │
│ │ 🔵 RDV Pris              [✏️][🗑️] │ │
│ │ 🟠 Proposition           [✏️][🗑️] │ │
│ │ 🟢 Négociation           [✏️][🗑️] │ │
│ │ 🟢 Gagné                 [✏️][🗑️] │ │
│ │ 🔴 Perdu                 [✏️][🗑️] │ │
│ └──────────────────────────────────┘ │
│                                       │
│ [+ Ajouter une Étape]                │
│                                       │
│ [Annuler]        [Sauvegarder]       │
└──────────────────────────────────────┘
```

---

## 📄 Page 3: Rapports IA

### Vue Rapports

```
┌──────────────────────────────────────────────────────────────┐
│ Rapports Structurés                                           │
│ [Journalier] [Hebdo] [Mensuel] [Annuel]                      │
│                                                                │
│ [💬 Assistant IA - Poser Question]  [📥 Exporter PDF/Excel]   │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ 📊 Résumé IA - Cette Semaine                                  │
├──────────────────────────────────────────────────────────────┤
│ Performance: Semaine exceptionnelle +28% vs précédente       │
│ Total: 67 000€ réalisés                                       │
│                                                                │
│ Visites: 81 visites (+12%), conversion 28%                   │
│ Top: Sophie Laurent (18), Jean Dupont (15)                   │
│                                                                │
│ Pipeline: 39 opportunités, 3.5M€ valeur                       │
│ ⚠️ 3 deals stagnent 14+ jours                                 │
│                                                                │
│ Alertes: 5 clients inactifs 60+ jours (85k€ opportunité)     │
│ 2 produits jamais proposés ce mois                           │
│                                                                │
│ Prévision: Pic semaine prochaine +15%                        │
│ Objectif mensuel: 107% prévu (confiance 92%)                 │
│                                                                │
│ 💡 Recommandations:                                           │
│ • Relancer 3 deals stagnants (Retail, ABC, XYZ)              │
│ • Campagne email 5 clients inactifs -10% (ROI 35%)           │
│ • Cross-sell Produits X et Y cette semaine                   │
│ • Préparer équipe pour pic (ressources, planning)            │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ Tendances Hebdomadaires          │ Comparaison Périodes       │
│ [Graphique Ligne: Ventes/Visites]│ [Graphique Barres: Act/Prec]│
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ ⚠️ Alertes & Actions Recommandées                             │
├──────────────────────────────────────────────────────────────┤
│ ⚠️ Haute   │ 5 clients inactifs 60+ jours          │[Détails]│
│ 🔴 Haute   │ 3 deals stagnent 14+ jours            │[Détails]│
│ ℹ️ Info    │ Tendance positive +28% cette semaine  │[Détails]│
│ ✅ Basse   │ Objectif mensuel dépassé 87%          │[Détails]│
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ 📝 Générer Rapport Personnalisé                               │
├──────────────────────────────────────────────────────────────┤
│ Type: [Rapport de Performance ▼]                              │
│ Période: [01/11/2025] - [30/11/2025]                          │
│ Format: [PDF ▼]                                               │
│                                                                │
│ Sections: [Résumé] [KPIs] [Graphiques] [Équipe] [Pipeline]   │
│           [Clients] [Recommandations IA]                      │
│                                                                │
│ [📥 Générer & Télécharger]  [📅 Programmer Envoi Auto]       │
└──────────────────────────────────────────────────────────────┘
```

### Modal Assistant IA Chat

```
┌──────────────────────────────────────┐
│ 💬 Assistant IA                      │
├──────────────────────────────────────┤
│ ┌──────────────────────────────────┐ │
│ │ 🤖 Bonjour! Je suis votre       │ │
│ │    assistant IA. Comment puis-je│ │
│ │    vous aider?                  │ │
│ │                                  │ │
│ │                 Quels clients    │ │
│ │                 sont inactifs? 👤│ │
│ │                                  │ │
│ │ 🤖 Analyse clients inactifs:     │ │
│ │    • 5 clients sans activité 60j│ │
│ │    • Valeur potentielle: 85k€   │ │
│ │    • Recommandation: Campagne   │ │
│ │      email -10%                 │ │
│ │    • Taux réactivation: 35%     │ │
│ └──────────────────────────────────┘ │
│                                       │
│ [Votre question...___________] [🔍]  │
│                                       │
│ Exemples:                             │
│ [Clients inactifs] [Synthèse visites] │
│ [Opportunités] [Prévisions]           │
│                                       │
│                            [Fermer]   │
└──────────────────────────────────────┘
```

---

## 📊 Page 4: Analytics IA

### Analyses Prédictives

```
┌──────────────────────────────────────────────────────────────┐
│ Modèle: [ARIMA 87%] [Prophet 91%] [LSTM 93%]                 │
│ Horizon: [1 Semaine] [1 Mois] [Trimestre] [Année]            │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ 📈 Prévisions Ventes - LSTM (93% précision)                   │
│ Confiance: 92% | Tendance: +12% prévu                        │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│    [Graphique Area avec Intervalles de Confiance]            │
│     • Ligne verte: Ventes réelles                            │
│     • Ligne bleue pointillés: Prévision                      │
│     • Zone grise: Intervalle confiance (limite haute/basse)  │
│                                                                │
│ 💡 Insights IA:                                               │
│ • Tendance haussière +12% sur 4 semaines                     │
│ • Pic prévu Semaine +2 (295k€) - préparer ressources        │
│ • Léger repli Semaine +4 (285k€) - saisonnier normal        │
│ • Confiance: 92% (historique 24 mois)                        │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ ☀️ Analyse Saisonnalité          │ ☁️ Analyse Sentiment (NLP) │
│ [Graphique: Ventes + Météo]      │ [Camembert: Positif 68%]   │
│                                   │  Neutre 24%, Négatif 8%    │
│ Corrélations:                     │                            │
│ ☀️ Météo +8% (15-20°C)           │ Analyse 1,247 commentaires │
│ 📅 Fériés -12%                   │ emails, tickets support    │
│ 📈 Rentrée Sept +15%             │                            │
│ 📉 Août -25%                     │                            │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ 🎯 Segmentation Clients IA (Machine Learning)                 │
├──────────────────────────────────────────────────────────────┤
│ ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐           │
│ │ 145  │  │  89  │  │  67  │  │  34  │  │  12  │           │
│ │Actifs│  │Potent│  │Nouv  │  │Dorm  │  │Risque│           │
│ │Fidèl.│  │      │  │      │  │      │  │      │           │
│ │850k€ │  │620k€ │  │380k€ │  │180k€ │  │95k€  │           │
│ │95%   │  │72%   │  │45%   │  │15%   │  │8%    │           │
│ └──────┘  └──────┘  └──────┘  └──────┘  └──────┘           │
│                                                                │
│ 🎯 Recommandations par Segment:                               │
│ • Actifs Fidèles: Programme VIP, upsell premium              │
│ • À Potentiel: Suivi personnalisé, démos produits            │
│ • Nouveaux: Onboarding optimisé, first win rapide            │
│ • Dormants: Campagne réactivation, offre -10%                │
│ • À Risque: Intervention urgente, retention plan             │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ ⚡ Automatisation des Tâches (IA)                             │
│ ✅ 2 tâches automatisées                                      │
├──────────────────────────────────────────────────────────────┤
│ 🔴 Relance Devis (3j)           │ 8 clients | 85k€ | ✅ Auto │
│ 🟠 Relance Appel (48h)          │12 clients | 120k€| ✅ Auto │
│ 🟠 Inactivité (30j)             │ 5 clients | 65k€ |[Activer]│
│ ℹ️ Offre Fidélité (6 mois)     │15 clients | 200k€|[Activer]│
│                                                                │
│ ✅ Gain: 15h/semaine | ROI: 470k€/an | Réussite: 78%         │
└──────────────────────────────────────────────────────────────┘
```

---

## 🎨 Palette de Couleurs

```
Primaire:      #2563EB  🔵  (Bleu professionnel)
Secondaire:    #F39C12  🟠  (Orange accent)
Succès:        #059669  🟢  (Vert foncé)
Avertissement: #F39C12  🟡  (Orange)
Danger:        #EF4444  🔴  (Rouge)
Info:          #3B82F6  ℹ️  (Bleu clair)
Neutre:        #94A3B8  ⚪  (Gris)
```

---

## 📱 Responsive Design

Toutes les pages sont **100% responsive** et optimisées pour:

- 💻 Desktop (>1200px)
- 💻 Laptop (992-1199px)
- 📱 Tablet (768-991px)
- 📱 Mobile (< 768px)

---

## 🚀 Navigation Rapide

```
Manager Dashboard:
  /manager/dashboard          → Home (KPIs temps réel)
  /manager/advanced-pipeline  → Pipeline personnalisable
  /manager/reports            → Rapports + assistant IA
  /manager/ai-analytics       → Prévisions + automatisation
  /manager/team-performance   → Performance équipe
  /manager/chat               → Chat temps réel

Sales Dashboard:
  /sales/dashboard            → Home
  /sales/clients              → Clients CRUD
  /sales/commandes            → Commandes
  /sales/sondages             → Sondages
  /sales/pipeline             → Pipeline Kanban
  /sales/visites              → Visites terrain
  /sales/chat                 → Chat
```

---

_Guide Visuel Manager - Novembre 2025_
