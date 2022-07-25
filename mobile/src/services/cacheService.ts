import AsyncStorage from '@react-native-async-storage/async-storage';

class CacheService {
  loadToken(): Promise<string | null> {
    return AsyncStorage.getItem('acessToken')
  }

  async setToken(token: string): Promise<void> {
    await AsyncStorage.setItem('acessToken', token);
  }

  async removeToken(): Promise<void> {
    AsyncStorage.removeItem('acessToken');
  }
}

export const cacheService = new CacheService();
