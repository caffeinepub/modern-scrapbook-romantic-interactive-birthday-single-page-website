import MixinStorage "blob-storage/Mixin";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";



actor {
  include MixinStorage();

  type UserProgress = {
    hasStarted : Bool;
    loveLetterCompleted : Bool;
    teasingSectionCompleted : Bool;
    surpriseButtonsCompleted : Bool;
    finalSectionViewed : Bool;
  };

  let userProgressMap = Map.empty<Nat, UserProgress>();
  var nextUserId = 0;

  public shared ({ caller }) func initializeUserProgress() : async Nat {
    let progress : UserProgress = {
      hasStarted = false;
      loveLetterCompleted = false;
      teasingSectionCompleted = false;
      surpriseButtonsCompleted = false;
      finalSectionViewed = false;
    };
    let userId = nextUserId;
    userProgressMap.add(userId, progress);
    nextUserId += 1;
    userId;
  };

  public shared ({ caller }) func updateUserProgress(userId : Nat, hasStarted : Bool, loveLetterCompleted : Bool, teasingSectionCompleted : Bool, surpriseButtonsCompleted : Bool, finalSectionViewed : Bool) : async Bool {
    switch (userProgressMap.get(userId)) {
      case (null) { false };
      case (?_) {
        let updatedProgress : UserProgress = {
          hasStarted;
          loveLetterCompleted;
          teasingSectionCompleted;
          surpriseButtonsCompleted;
          finalSectionViewed;
        };
        userProgressMap.add(userId, updatedProgress);
        true;
      };
    };
  };

  public query ({ caller }) func getUserProgress(userId : Nat) : async ?UserProgress {
    userProgressMap.get(userId);
  };

  public query ({ caller }) func getLoveLetterMessages() : async [Text] {
    [
      "Are you really reading this?",
      "You're cuter than this website.",
      "Is this you flirting? 😂",
      "Keep scrolling for more secrets.",
      "I love you more than pizza.",
    ];
  };

  public query ({ caller }) func getTeasingMessages() : async [Text] {
    [
      "Did you just smile? Busted!",
      "Caught you blushing 😏💕",
      "You're stuck here now 😌",
      "Try not to smile... or don't.",
    ];
  };

  public query ({ caller }) func getFinalMessages() : async [Text] {
    [
      "No matter what—I'm all in for you.",
      "Every day is better with you in it.",
      "I'll always choose you.",
    ];
  };

  public query ({ caller }) func getAllUserProgress() : async [UserProgress] {
    userProgressMap.values().toArray();
  };
};
