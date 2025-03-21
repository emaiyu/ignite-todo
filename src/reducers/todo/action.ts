export enum ActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
  TOGGLE = "TOGGLE",
}
export const Action = {
  add(content: string) {
    return {
      type: ActionType.ADD,
      payload: {
        content,
      },
    };
  },
  remove(id: string) {
    return {
      type: ActionType.REMOVE,
      payload: {
        id,
      },
    };
  },

  toggle(id: string) {
    return {
      type: ActionType.TOGGLE,
      payload: {
        id,
      },
    };
  },
} as const;
