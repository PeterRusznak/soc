import Database "./database";
import Types "./types";
import Utils "./utils";

actor LinkedUp{
    var directory :Database.Directory = Database.Directory();

    type NewProfile = Types.NewProfile;
    type Profile = Types.Profile;
    type UserId = Types.UserId;

    public func healthcheck(): async Bool{
        true;
    };

    public shared(msg) func create(profile:NewProfile): async Profile{
        let prof: Profile = directory.createOne(msg.caller, profile);
        return prof;
    };

    public query func get(userId: UserId): async Profile{
        Utils.getProfile(directory, userId);
    };

};