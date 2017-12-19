using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace ITCompany.DAL.Exceptions
{
    [Serializable]
    public class StorageException : Exception
    {
        public StorageException()
        {

        }

        public StorageException(string message) : base(message)
        {

        }

        public StorageException(string message, Exception inner) : base(message, inner)
        {

        }

        protected StorageException(SerializationInfo info, StreamingContext context) : base(info, context)
        {

        }
    }
}
