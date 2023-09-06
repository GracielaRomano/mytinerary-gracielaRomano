import CardActivities from "./CardActivities";
import { useState, useEffect } from "react";
import activity_actions from "../store/actions/activities";
import { useSelector, useDispatch } from "react-redux";

const { read_activities } = activity_actions;

export default function Activities(p_itinerary_id) {
  const dispatch = useDispatch();
  const activities = useSelector((store) => store.activities.activities);

  useEffect(() => {
    dispatch(
      read_activities({ itinerary_id: p_itinerary_id }));
  }, []);

  return (
    <>
      {
       activities.map((each) => (
              <CardActivities
                key={each._id}
                photo={each.photo}
                name={each.name}
                id={each._id}
              />
        ))
      }
    </>
  );
}
