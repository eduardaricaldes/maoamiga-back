import { findProvidersByLocationAndCategory } from "@/repositories/provider";

export async function searchProviderByCategoryAndUserLocation(params: UserGetProvidersParams) {
  const { categoryId, lat, long } = params;

  const providers = await findProvidersByLocationAndCategory(lat, long, categoryId);
  if (providers.length === 0) {
    return [];
  }

  return providers;
}

export interface UserGetProvidersParams {
  categoryId: number;
  lat: number;
  long: number;
}
