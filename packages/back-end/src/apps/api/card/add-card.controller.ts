import {injectable} from "tsyringe";
import {AuthorizeUserService} from "../../../cores/authentication/services/authorize-user.service";
import {Author} from "../../../cores/mini-blog/models/interfaces/card.interface";
import {CreateCardService} from "../../../cores/mini-blog/services/card/create-card.service";
import {Controller} from "../../../libs/common/controller";
import {DI} from "../../../libs/common/decorators/di-decorator";
import {CardRequestBody} from "./request.interfaces";

@DI
@injectable()
export class AddCardController extends Controller {
    constructor(
        private userAuthorizer: AuthorizeUserService,
        private createCardService: CreateCardService
    ) {
        super()
    }

    protected async handleRequest(body: CardRequestBody): Promise<void> {
        const token = this.getHeader('authorization') as string
        this.context = this.userAuthorizer.execute(token)

        const author = Object.entries(this.context)
            .find(([entry]) => entry === 'user')[1] as Author
        const { name, content, categoryName } = body

        this.resBody = await this.createCardService.execute(name, content, categoryName, author)
    }

}