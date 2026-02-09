import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { UserProgress } from '../backend';

export function useGetLoveLetterMessages() {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ['loveLetterMessages'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getLoveLetterMessages();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetTeasingMessages() {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ['teasingMessages'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTeasingMessages();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetFinalMessages() {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ['finalMessages'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getFinalMessages();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useInitializeUserProgress() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.initializeUserProgress();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userProgress'] });
    },
  });
}

export function useUpdateUserProgress() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      userId,
      hasStarted,
      loveLetterCompleted,
      teasingSectionCompleted,
      surpriseButtonsCompleted,
      finalSectionViewed,
    }: {
      userId: bigint;
      hasStarted: boolean;
      loveLetterCompleted: boolean;
      teasingSectionCompleted: boolean;
      surpriseButtonsCompleted: boolean;
      finalSectionViewed: boolean;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.updateUserProgress(
        userId,
        hasStarted,
        loveLetterCompleted,
        teasingSectionCompleted,
        surpriseButtonsCompleted,
        finalSectionViewed
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userProgress'] });
    },
  });
}

export function useGetUserProgress() {
  const { actor, isFetching } = useActor();

  return useMutation({
    mutationFn: async (userId: bigint) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getUserProgress(userId);
    },
  });
}
