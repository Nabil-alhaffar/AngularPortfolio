export class Tag {
    static readonly ANGULAR = new Tag ('Angular', 'red');
    static readonly TYPESCRIPT = new Tag ('TypeScript', 'darkred');
    static readonly PYTHON = new Tag ('Python', 'pink');
    static readonly CSHARP = new Tag ('C#', 'green');
    static readonly JAVA = new Tag ('Java', 'orange');
    static readonly NODEJS = new Tag ('Node.Js', 'lightgreen');
    static readonly ASPNET = new Tag ('ASP.NET', 'purple');
    static readonly JAVASCRIPT = new Tag ('JavaScript', 'orange');
    static readonly REACT = new Tag ('React', 'blue');
    static readonly SWIFT = new Tag ('Swift', 'orange');
    static readonly C = new Tag ('C/C++', 'navy');
    static readonly XAMARIN = new Tag ('Xamarin', 'aquablue')

    private constructor (private readonly key: string, public readonly color: string){

    }
    toString(){
        return this.key;
    }
}