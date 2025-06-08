import {
  parseAsInteger,
  parseAsString,
  useQueryStates,
  parseAsStringEnum,
} from "nuqs";

import { MeetingStatus } from "../types";

export const useMeetingsFilters = () => {
  return useQueryStates({
    search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
    page: parseAsInteger.withDefault(1).withOptions({ clearOnDefault: true }),
    status: parseAsStringEnum(Object.values(MeetingStatus)),
    agentId: parseAsString
      .withDefault("")
      .withOptions({ clearOnDefault: true }),
  });
};
