import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { UserResponse } from "../../interfaces/profile/profile.type";
import profileRepository from "../../repository/profile/profile.repository";

export const useGetUser = (
  options?: UseQueryOptions<UserResponse, AxiosError, UserResponse, "profile">
): UseQueryResult<UserResponse, AxiosError> =>
  useQuery("profile", () => profileRepository.getUser(), options);
