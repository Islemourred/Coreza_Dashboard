import {
  BasicCard,
  CardSubTitle,
  FlatCard,
  HeadingCard,
  LongLorem,
  WithoutShadowCard,
} from "../../Constant";

export const BothDragClassboard = {
  columns: [
    {
      id: 1,
      title: BasicCard,
      cards: [
        {
          id: 1,
          description: LongLorem,
        },
      ],
    },
    {
      id: 2,
      title: FlatCard,
      cards: [
        {
          id: 3,
          description: LongLorem,
        },
      ],
    },
  ],
};

export const DragCardOnlyClassBoard = {
  columns: [
    {
      id: 1,
      title: HeadingCard,
      cards: [
        {
          id: 1,
          description: LongLorem,
        },
      ],
    },
    {
      id: 2,
      title: WithoutShadowCard,
      cards: [
        {
          id: 3,
          description: LongLorem,
        },
      ],
    },
  ],
};

export const DragOnlyContentClassBoard = {
  columns: [
    {
      id: 1,
      title: CardSubTitle,
      cards: [
        {
          id: 1,
          title:
            "You can extend default collapse behaviour to create an accordion",
          description: LongLorem,
        },
      ],
    },
    {
      id: 2,
      title: "Card Sub-Title",
      cards: [
        {
          id: 3,
          title:
            "You can extend default collapse behaviour to create an accordion",
          description: LongLorem,
        },
      ],
    },
  ],
};
