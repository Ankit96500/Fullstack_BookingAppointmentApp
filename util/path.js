import { dirname } from 'path';

// export default dirname(process.mainModule.filename);
export default dirname(process.cwd().filename);