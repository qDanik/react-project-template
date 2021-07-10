import { Inject, Injectable } from 'containers/core';
import { AxiosAdapter } from 'core/adapters';
import { TokenTypes } from 'core/http';
import { LocalStorageType, Storage } from 'core/storage';
import { ACCESS_TOKEN_KEY } from 'domain/auth/auth.constants';

@Injectable()
export class TokenAxiosAdapter extends AxiosAdapter {
  constructor(@Inject(LocalStorageType) private readonly _storage: Storage) {
    super();
    this._http.interceptors.request.use(config => {
      const headers = this.getHeaders();

      return {
        ...config,
        headers: {
          ...config.headers,
          ...headers,
        },
      };
    });
  }

  getHeaders(): { Authorization: string } {
    const accessToken = this._storage.get(ACCESS_TOKEN_KEY);

    if (!accessToken) {
      throw new Error('Access token not found!');
    }

    return {
      Authorization: `${TokenTypes.Bearer} ${accessToken}`,
    };
  }
}
