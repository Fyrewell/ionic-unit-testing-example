import { ENV } from '@app/config';

import { WtfService } from '../providers/wtf-service';
import { WtfServiceMock} from '../providers/wtf-service-mock';

export function WtfServiceFactory(Http) {
  return ENV.MOCK ? new WtfServiceMock(Http) : new WtfService(Http);
}
