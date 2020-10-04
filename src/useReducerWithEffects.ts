import { useEffectReducer } from "use-effect-reducer";

export function useReducerWithEffects<
  TState,
  TEffectsMap extends {
    [key: string]: (
      state: TState,
      effect: any,
      dispatch: React.Dispatch<any>
    ) => Promise<void> | void;
  },
  TAction = { type: string; [key: string]: any },
  TEffect = { type: keyof TEffectsMap; [key: string]: any }
>(
  reducer: (
    prevState: TState,
    action: TAction,
    exec: (effect: TEffect) => any
  ) => TState,
  initialState: TState,
  effectsMap: TEffectsMap
): [TState, (action: TAction) => void] {
  return useEffectReducer(
    reducer as any,
    initialState,
    effectsMap as any
  ) as any;
}
