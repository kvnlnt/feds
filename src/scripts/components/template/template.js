import Base from "../base";

// Example:
// <%if(showRecords) {%>
// <%for(var i in records) {%>
// <a href="#">
//   <%records[i]%></a>
// <%}%>
// <%} else {%>
// <p>no records</p>
// <%}%>

export class TemplateEngine {
  constructor(html) {
    var re = /<%(.+?)%>/g;
    const reExp = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g;
    let code = "with(params) { var r=[];\n";
    let cursor = 0;
    let result, match;
    var add = function(line, js) {
      js
        ? (code += line.match(reExp) ? line + "\n" : "r.push(" + line + ");\n")
        : (code +=
            line != "" ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : "");
      return add;
    };
    while ((match = re.exec(html))) {
      add(html.slice(cursor, match.index))(match[1], true);
      cursor = match.index + match[0].length;
    }
    add(html.substr(cursor, html.length - cursor));
    code = (code + 'return r.join(""); }').replace(/[\r\t\n]/g, " ");
    return new Function("params", code);
  }
}

export class Template extends Base {
  constructor(id = "") {
    super(id, name);
    return new TemplateEngine(this.el.textContent.trim());
  }
}
