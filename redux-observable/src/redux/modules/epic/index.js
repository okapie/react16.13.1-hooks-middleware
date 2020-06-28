import { filter, mapTo } from 'rxjs/operators';

export default (action$) => action$.pipe(
  filter(action => action.type === "GET_USERS"),
  mapTo({ type: "FULFILLED_GET_USERS" })
);
