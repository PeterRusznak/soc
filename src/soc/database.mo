import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Option "mo:base/Option";
import Principal "mo:base/Principal";
import Types "./types";

module{
    type NewProfile = Types.NewProfile;
    type Profile = Types.Profile;
    type UserId = Types.UserId;

    public class Directory(){
        let hashmap = HashMap.HashMap<UserId, Profile>(1, isEq, Principal.hash);

        public func createOne(userId: UserId, profile:NewProfile): Profile{
            let prof:Profile = makeProfile(userId, profile);
            hashmap.put(userId, prof);
            return prof;
        };

        public func updateOne(userId: UserId, profile:Profile){
            hashmap.put(userId, profile);
        };

        public func findOne(userId: UserId):?Profile{
            hashmap.get(userId);
        };

        public func findMany(userIds:[UserId]):[Profile]{
            func getProfile(userId:UserId):Profile{
                Option.unwrap<Profile>(hashmap.get(userId));
            };
            Array.map<UserId, Profile>(userIds, getProfile)
        };

    };

    func makeProfile(userId:UserId, profile:NewProfile):Profile{
        {
        id = userId;
        firstName = profile.firstName;
        lastName = profile.lastName;
        desc = profile.desc;
        }
    };

    func isEq(x:UserId, y:UserId):Bool{x == y}
};